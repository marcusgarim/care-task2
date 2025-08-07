# Backend Docli - API de Contatos

Backend Node.js com Express e PostgreSQL para gerenciar contatos do site Docli.

## Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- PostgreSQL (Azure Database for PostgreSQL)

### 1. Instalar dependências
```bash
cd backend
npm install
```

### 2. Configurar variáveis de ambiente
O arquivo `config.env` já está configurado com suas credenciais do Azure PostgreSQL.

### 3. Iniciar o servidor
```bash
# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

O servidor estará disponível em `http://localhost:3000`

## Endpoints da API

### POST /api/contact
Envia um novo contato para o banco de dados.

**Body:**
```json
{
  "nome": "João Silva",
  "telefone": "(11) 99999-9999",
  "email": "joao@empresa.com",
  "empresa": "Empresa XYZ",
  "mensagem": "Gostaria de saber mais sobre as soluções..."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Contato enviado com sucesso!",
  "data": {
    "id": 1,
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

### GET /api/contact
Lista todos os contatos (para administração).

**Response (200):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "nome": "João Silva",
      "telefone": "(11) 99999-9999",
      "email": "joao@empresa.com",
      "empresa": "Empresa XYZ",
      "mensagem": "Gostaria de saber mais...",
      "created_at": "2024-01-15T10:30:00Z",
      "ip_address": "192.168.1.1"
    }
  ]
}
```

### GET /api/health
Health check do servidor.

**Response (200):**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 3600
}
```

## Segurança

- **Rate Limiting**: Máximo 5 contatos por IP por hora
- **Validação de dados**: Todos os campos são validados e sanitizados
- **CORS**: Configurado para permitir apenas origens específicas
- **Helmet**: Headers de segurança configurados
- **SQL Injection Protection**: Uso de prepared statements

## Estrutura do Projeto

```
backend/
├── server.js          # Servidor principal
├── database.js        # Configuração do banco
├── routes/
│   └── contact.js     # Rotas de contato
├── config.env         # Variáveis de ambiente
├── package.json       # Dependências
└── README.md          # Esta documentação
```

## Banco de Dados

### Tabela: contact_submissions
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  empresa VARCHAR(255) NOT NULL,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address INET,
  user_agent TEXT
);
```

## Desenvolvimento

### Logs
O servidor registra todas as requisições no console:
```
2024-01-15T10:30:00.000Z - POST /api/contact
2024-01-15T10:30:01.000Z - GET /api/health
```

### Debug
Para ver logs detalhados, defina:
```bash
NODE_ENV=development
```