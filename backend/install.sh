#!/bin/bash

echo "Instalando Backend Docli..."

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "Node.js não encontrado. Instale o Node.js primeiro:"
    echo "   https://nodejs.org/"
    exit 1
fi

# Verificar versão do Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "Node.js versão 16 ou superior é necessária. Versão atual: $(node -v)"
    exit 1
fi

echo "Node.js $(node -v) encontrado"

# Instalar dependências
echo "Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "Dependências instaladas com sucesso"
else
    echo "Erro ao instalar dependências"
    exit 1
fi

# Verificar se o arquivo de configuração existe
if [ ! -f "config.env" ]; then
    echo "Arquivo config.env não encontrado"
    exit 1
fi

echo "Configuração encontrada"

# Testar conexão com banco
echo "Testando conexão com banco de dados..."
node -e "
const { Pool } = require('pg');
require('dotenv').config({ path: './config.env' });

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false }
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro de conexão:', err.message);
    process.exit(1);
  } else {
    console.log('Conexão com banco estabelecida');
    pool.end();
  }
});
"

if [ $? -eq 0 ]; then
    echo ""
    echo "Instalação concluída com sucesso!"
    echo ""
    echo "Para iniciar o servidor:"
    echo "  npm run dev    # Desenvolvimento"
    echo "  npm start      # Produção"
    echo ""
    echo "Servidor estará disponível em: http://localhost:3000"
    echo "Health check: http://localhost:3000/api/health"
else
    echo "Erro ao conectar com banco de dados"
    echo "Verifique suas credenciais no arquivo config.env"
    exit 1
fi 