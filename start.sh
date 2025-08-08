#!/bin/bash

echo "Iniciando servidor Docli..."
echo "Backend: http://localhost:3000"
echo "Frontend: http://localhost:3000"
echo "Para parar o servidor, pressione Ctrl+C"
echo ""

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
fi

# Iniciar servidor
node server.js 