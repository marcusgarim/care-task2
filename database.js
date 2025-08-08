const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Carregar variáveis de ambiente
require('dotenv').config({ path: path.join(__dirname, 'config.env') });

// Configuração do pool de conexões PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false // Necessário para Azure PostgreSQL
  },
  max: 20, // Máximo de conexões no pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000, // Aumentado para 10 segundos
  query_timeout: 10000, // Timeout para queries
});

// Testar conexão
pool.on('connect', () => {
  console.log('Conectado ao PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Erro na conexão PostgreSQL:', err);
});

// Função para inicializar tabelas
async function initializeDatabase() {
  try {
    // Primeiro, testar a conexão
    await pool.query('SELECT NOW()');
    console.log('Conexão com banco estabelecida');
    
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_submissions (
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
    `;
    
    await pool.query(createTableQuery);
    console.log('Tabela contact_submissions criada/verificada');
    
    // Criar índices separadamente
    try {
      await pool.query('CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email)');
      await pool.query('CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at)');
      console.log('Índices criados/verificados');
    } catch (indexError) {
      console.log('Índices já existem ou erro ao criar:', indexError.message);
    }
    
    console.log('Tabelas inicializadas com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar tabelas:', error);
    throw error; // Re-throw para que o servidor pare se não conseguir conectar
  }
}

// Função para inserir contato
async function insertContact(contactData) {
  const { nome, telefone, email, empresa, mensagem, ipAddress, userAgent } = contactData;
  
  const query = `
    INSERT INTO contact_submissions (nome, telefone, email, empresa, mensagem, ip_address, user_agent)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id, created_at
  `;
  
  const values = [nome, telefone, email, empresa, mensagem, ipAddress, userAgent];
  
  try {
    const result = await pool.query(query, values);
    return {
      success: true,
      id: result.rows[0].id,
      created_at: result.rows[0].created_at
    };
  } catch (error) {
    console.error('Erro ao inserir contato:', error);
    throw error;
  }
}

// Função para buscar todos os contatos (para admin)
async function getAllContacts() {
  const query = `
    SELECT id, nome, telefone, email, empresa, mensagem, created_at, ip_address
    FROM contact_submissions
    ORDER BY created_at DESC
  `;
  
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
    throw error;
  }
}

module.exports = {
  pool,
  initializeDatabase,
  insertContact,
  getAllContacts
}; 