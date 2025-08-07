# Arquitetura do Projeto Docli

## Resumo da Implementação

Implementei uma **arquitetura backend separada** para integrar o formulário de contato com o banco de dados PostgreSQL Azure, seguindo as melhores práticas de segurança e escalabilidade.

## Por que Backend Separado?

### Problemas de colocar no frontend:
- **Segurança**: Credenciais expostas no navegador
- **SQL Injection**: Vulnerabilidades de segurança
- **Validação**: Falta de validação robusta
- **Rate Limiting**: Sem proteção contra spam
- **Manutenibilidade**: Código misturado com UI

### Benefícios da arquitetura atual:
- **Segurança**: Credenciais protegidas no servidor
- **Validação**: Validação robusta de dados
- **Rate Limiting**: Proteção contra spam
- **Escalabilidade**: Fácil de expandir
- **Manutenibilidade**: Separação clara de responsabilidades

## Arquitetura Implementada

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐    SQL    ┌─────────────────┐
│   Frontend      │ ──────────────► │   Backend       │ ────────► │   PostgreSQL    │
│   (HTML/CSS/JS) │                 │   (Node.js)     │           │   (Azure)       │
└─────────────────┘                 └─────────────────┘           └─────────────────┘
        │                                   │                              │
        │                                   │                              │
        ▼                                   ▼                              ▼
   index.html                          server.js                    contact_submissions
   style.css                           database.js                   (tabela)
   app.js                              routes/contact.js
```

## Estrutura de Arquivos

```
care-task2/
├── 📄 index.html              # Frontend principal
├── 🎨 style.css               # Estilos CSS
├── ⚡ app.js                  # JavaScript frontend (atualizado)
├── 📚 INSTALACAO.md           # Guia de instalação
├── 🏗️ ARQUITETURA.md          # Esta documentação
├── ⚙️ vercel.json             # Configuração Vercel
├── 📁 public/                 # Assets estáticos
└── 📁 backend/                # Backend Node.js
    ├── 🚀 server.js           # Servidor Express
    ├── 🗄️ database.js         # Configuração PostgreSQL
    ├── 🛣️ routes/
    │   └── contact.js         # Rotas da API
    ├── ⚙️ config.env          # Variáveis de ambiente
    ├── 📦 package.json        # Dependências
    ├── 📖 README.md           # Documentação backend
    ├── 🔧 install.sh          # Script de instalação
    └── 🚫 .gitignore          # Arquivos ignorados
```

## Componentes Principais

### 1. Frontend (app.js atualizado)
- **Formulário**: Coleta dados do usuário
- **Validação**: Validação básica no cliente
- **API Integration**: Envia dados para backend via fetch
- **Feedback**: Notificações visuais de sucesso/erro

### 2. Backend (Node.js + Express)
- **Servidor**: Express.js com configurações de segurança
- **Rotas**: API RESTful para contatos
- **Validação**: Validação robusta de dados
- **Rate Limiting**: Proteção contra spam
- **CORS**: Configuração de segurança

### 3. Banco de Dados (PostgreSQL Azure)
- **Tabela**: `contact_submissions`
- **Campos**: nome, telefone, email, empresa, mensagem, timestamp, IP
- **Índices**: Otimização para consultas
- **Segurança**: Prepared statements

## Medidas de Segurança

### 1. Validação de Dados
```javascript
// Validação no backend
if (!nome || nome.trim().length < 2) {
  return res.status(400).json({ error: 'Nome inválido' });
}
```

### 2. Rate Limiting
```javascript
// Máximo 5 contatos por IP por hora
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5
});
```

### 3. SQL Injection Protection
```javascript
// Prepared statements
const query = `INSERT INTO contact_submissions (...) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
const values = [nome, telefone, email, empresa, mensagem, ipAddress, userAgent];
```

### 4. CORS Configuration
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5000',
  credentials: true
}));
```

## Fluxo de Dados

1. **Usuário preenche formulário** → Frontend valida dados básicos
2. **Frontend envia dados** → POST para `/api/contact`
3. **Backend valida dados** → Validação robusta + sanitização
4. **Backend insere no banco** → Prepared statement seguro
5. **Backend retorna resposta** → JSON com status
6. **Frontend mostra feedback** → Notificação visual

## Deploy

### Vercel (Recomendado)
- **Frontend**: Servido como arquivos estáticos
- **Backend**: Serverless functions
- **Banco**: Azure PostgreSQL (externo)

### Configuração
```json
{
  "builds": [
    { "src": "backend/server.js", "use": "@vercel/node" },
    { "src": "*.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "backend/server.js" },
    { "src": "/(.*)", "dest": "/$1" }
  ]
}
```

## Escalabilidade

### Próximos Passos
1. **Autenticação**: JWT para área administrativa
2. **Cache**: Redis para performance
3. **Logs**: Sistema de logging estruturado
4. **Monitoramento**: Métricas e alertas
5. **Testes**: Testes automatizados

## Monitoramento

### Logs Implementados
- Requisições HTTP
- Erros de banco de dados
- Rate limiting
- Validação de dados

### Métricas Disponíveis
- Contatos por hora/dia
- Taxa de erro
- Tempo de resposta
- Uso de recursos