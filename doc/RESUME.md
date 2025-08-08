# Resumo Técnico - Backend Docli

## Arquitetura

```
Frontend (HTML/CSS/JS) → Backend (Node.js/Express) → PostgreSQL Azure
```

## Estrutura de arquivos

```
care-task2/
├── server.js              # Servidor principal (raiz)
├── database.js            # Configuração PostgreSQL
├── config.env             # Variáveis de ambiente
├── package.json           # Dependências
├── web.config             # Configuração Azure
├── vercel.json            # Configuração Vercel
├── start.sh               # Script de inicialização
├── routes/
│   └── contact.js         # Rotas da API
└── frontend/              # Frontend
    ├── index.html         # Página principal
    ├── style.css          # Estilos
    ├── app.js             # JavaScript
    └── public/            # Assets estáticos
```

## Arquivos criados e suas funções

### package.json (raiz)
Lista as dependências do projeto:
- `express`: Framework web para criar o servidor
- `pg`: Driver PostgreSQL para conectar ao banco
- `cors`: Middleware para permitir requisições cross-origin
- `helmet`: Headers de segurança
- `express-rate-limit`: Rate limiting para proteção contra spam

### config.env (raiz)
Variáveis de ambiente com credenciais do banco:
```
PGHOST=general-care-db.postgres.database.azure.com
PGUSER=generalcare
PGPORT=5432
PGDATABASE=docli-site
PGPASSWORD="47=y85Y/u'4J"
```

### database.js (raiz)
Configuração da conexão com PostgreSQL e funções de acesso ao banco:

**Pool de conexões:**
```javascript
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  // ... outras configs
  ssl: { rejectUnauthorized: false } // Necessário para Azure
});
```

**Funções principais:**
- `initializeDatabase()`: Cria tabela `contact_submissions` se não existir
- `insertContact()`: Insere novo contato usando prepared statements
- `getAllContacts()`: Busca todos os contatos para administração

### server.js (raiz)
Servidor Express principal com configurações de segurança:

**Middlewares configurados:**
- `helmet`: Headers de segurança
- `cors`: Permite requisições do frontend
- `rateLimit`: Limita 100 requests por IP em 15 minutos
- `express.json()`: Parse de JSON

**Servir arquivos estáticos:**
```javascript
app.use(express.static(path.join(__dirname, 'frontend')));
```

**Rate limiting específico para contatos:**
```javascript
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5 // Máximo 5 contatos por IP
});
```

### routes/contact.js
Rotas da API REST:

**POST /api/contact:**
- Valida dados do formulário (nome, telefone, email, empresa, mensagem)
- Sanitiza inputs (trim, toLowerCase)
- Captura IP e User-Agent
- Insere no banco usando prepared statements
- Retorna JSON com status

**GET /api/contact:**
- Lista todos os contatos (para administração)
- Ordena por data de criação

**Validações implementadas:**
```javascript
if (!nome || nome.trim().length < 2) {
  return res.status(400).json({ error: 'Nome deve ter pelo menos 2 caracteres' });
}
```

### frontend/app.js
JavaScript do frontend modificado para integrar com a API:

**Antes:**
```javascript
// Simulava envio
setTimeout(() => {
  alert('Enviado!');
}, 1000);
```

**Depois:**
```javascript
// Envia dados reais para API
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(contactData)
});
```

**Sistema de notificações:**
- Função `showNotification()` para feedback visual
- Cores diferentes para sucesso/erro
- Auto-remove após 5 segundos

## Fluxo de dados

1. **Frontend:** Usuário preenche formulário → `FormData` captura dados
2. **Frontend:** `fetch()` envia POST para `/api/contact`
3. **Backend:** Middleware valida e sanitiza dados
4. **Backend:** `insertContact()` salva no PostgreSQL
5. **Backend:** Retorna JSON com status 201
6. **Frontend:** Mostra notificação de sucesso/erro

## Segurança implementada

**Rate Limiting:**
- 100 requests por IP em 15 minutos (geral)
- 5 contatos por IP em 1 hora (específico)

**Validação:**
- Todos os campos obrigatórios
- Validação de email
- Tamanho mínimo para campos

**SQL Injection Protection:**
- Prepared statements em todas as queries
- Parâmetros separados da query

**CORS:**
- Configurado para permitir apenas origem específica
- Credentials habilitados

## Banco de dados

**Tabela criada:**
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

**Índices:**
- `idx_contact_email`: Otimiza busca por email
- `idx_contact_created_at`: Otimiza ordenação por data

## Como executar

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start
# ou
./start.sh
```

## Deploy

### Azure App Service
- Backend na raiz (conforme exigido pelo Azure)
- Arquivo `web.config` para configuração IIS
- Variáveis de ambiente configuradas no portal Azure

### Vercel (alternativo)
- Configuração em `vercel.json`
- Rotas para API e frontend

## Endpoints disponíveis

- `POST /api/contact` - Salva novo contato
- `GET /api/contact` - Lista todos os contatos
- `GET /api/health` - Health check do servidor
- `GET /` - Frontend (index.html)

## Próximos passos

1. Implementar autenticação para área administrativa
2. Criar dashboard para visualizar contatos
3. Adicionar envio de email de confirmação
4. Configurar deploy no Azure App Service
5. Implementar logs estruturados
6. Adicionar testes automatizados 