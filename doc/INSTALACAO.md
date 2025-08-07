# Guia de Instalação - Docli Backend

## Pré-requisitos

### 1. Instalar Node.js

**macOS (recomendado):**
```bash
# Usando Homebrew
brew install node

# Ou baixar do site oficial
# https://nodejs.org/
```

**Windows:**
- Baixar e instalar do [nodejs.org](https://nodejs.org/)

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verificar instalação:**
```bash
node --version  # Deve ser 16 ou superior
npm --version
```

### 2. PostgreSQL (já configurado)
O banco Azure PostgreSQL já está configurado com as credenciais fornecidas.

## 🛠️ Instalação do Backend

### Opção 1: Instalação Automatizada
```bash
cd backend
./install.sh
```

### Opção 2: Instalação Manual
```bash
cd backend

# 1. Instalar dependências
npm install

# 2. Verificar configuração
cat config.env

# 3. Iniciar servidor
npm run dev
```

## 🚀 Iniciar o Projeto

### 1. Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Servidor estará em: `http://localhost:3000`

### 2. Frontend (Terminal 2)
```bash
# Se você tiver um servidor local (Python, PHP, etc.)
python -m http.server 5000
# ou
php -S localhost:5000
# ou simplesmente abrir index.html no navegador
```

## Testando a API

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Enviar Contato
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "telefone": "(11) 99999-9999",
    "email": "joao@teste.com",
    "empresa": "Empresa Teste",
    "mensagem": "Teste de contato"
  }'
```

### Listar Contatos
```bash
curl http://localhost:3000/api/contact
```

## 🔧 Configuração

### Variáveis de Ambiente
O arquivo `backend/config.env` contém:
- Credenciais do PostgreSQL Azure
- Configurações do servidor
- Configurações de CORS

### Estrutura do Projeto
```
care-task2/
├── index.html          # Frontend
├── style.css           # Estilos
├── app.js              # JavaScript frontend
├── backend/            # Backend Node.js
│   ├── server.js       # Servidor Express
│   ├── database.js     # Configuração PostgreSQL
│   ├── routes/         # Rotas da API
│   ├── config.env      # Variáveis de ambiente
│   └── package.json    # Dependências
└── public/             # Assets estáticos
```

## Segurança

- **Rate Limiting**: 5 contatos por IP/hora
- **Validação**: Todos os campos são validados
- **CORS**: Configurado para localhost
- **SQL Injection**: Protegido com prepared statements

## Troubleshooting

### Erro: "Node.js não encontrado"
```bash
# Instalar Node.js primeiro
brew install node  # macOS
# ou baixar de nodejs.org
```

### Erro: "Cannot find module"
```bash
cd backend
npm install
```

### Erro de conexão com banco
- Verificar credenciais em `config.env`
- Verificar se o Azure PostgreSQL está ativo
- Verificar firewall/network

### Erro CORS
- Verificar se o frontend está rodando na porta correta
- Verificar configuração CORS_ORIGIN em `config.env`

## Logs

O servidor registra todas as requisições:
```
2024-01-15T10:30:00.000Z - POST /api/contact
2024-01-15T10:30:01.000Z - GET /api/health
```

## Deploy

### Vercel (Recomendado)
1. Conectar repositório GitHub
2. Configurar variáveis de ambiente
3. Deploy automático

### Outros
- Railway
- Heroku
- DigitalOcean App Platform