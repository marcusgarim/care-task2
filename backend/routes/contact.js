const express = require('express');
const router = express.Router();
const { insertContact, getAllContacts } = require('../database');

// Middleware para validação de dados
function validateContactData(req, res, next) {
  const { nome, telefone, email, empresa, mensagem } = req.body;
  
  // Validações básicas
  if (!nome || nome.trim().length < 2) {
    return res.status(400).json({ 
      error: 'Nome deve ter pelo menos 2 caracteres' 
    });
  }
  
  if (!telefone || telefone.trim().length < 10) {
    return res.status(400).json({ 
      error: 'Telefone deve ter pelo menos 10 dígitos' 
    });
  }
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      error: 'Email inválido' 
    });
  }
  
  if (!empresa || empresa.trim().length < 2) {
    return res.status(400).json({ 
      error: 'Empresa deve ter pelo menos 2 caracteres' 
    });
  }
  
  if (!mensagem || mensagem.trim().length < 10) {
    return res.status(400).json({ 
      error: 'Mensagem deve ter pelo menos 10 caracteres' 
    });
  }
  
  // Sanitizar dados
  req.body.nome = nome.trim();
  req.body.telefone = telefone.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.empresa = empresa.trim();
  req.body.mensagem = mensagem.trim();
  
  next();
}

// POST /api/contact - Criar novo contato
router.post('/', validateContactData, async (req, res) => {
  try {
    // Capturar informações do cliente
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    
    const contactData = {
      ...req.body,
      ipAddress,
      userAgent
    };
    
    // Inserir no banco
    const result = await insertContact(contactData);
    
    res.status(201).json({
      success: true,
      message: 'Contato enviado com sucesso!',
      data: {
        id: result.id,
        created_at: result.created_at
      }
    });
    
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    
    // Verificar se é erro de duplicação
    if (error.code === '23505') {
      return res.status(409).json({
        error: 'Este email já foi registrado recentemente'
      });
    }
    
    res.status(500).json({
      error: 'Erro interno do servidor. Tente novamente.'
    });
  }
});

// GET /api/contact - Listar todos os contatos (para admin)
router.get('/', async (req, res) => {
  try {
    // TODO: Implementar autenticação para esta rota
    const contacts = await getAllContacts();
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
    
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
    res.status(500).json({
      error: 'Erro interno do servidor'
    });
  }
});

// GET /api/contact/:id - Buscar contato específico
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Implementar busca por ID
    res.json({
      success: true,
      message: 'Funcionalidade em desenvolvimento'
    });
    
  } catch (error) {
    console.error('Erro ao buscar contato:', error);
    res.status(500).json({
      error: 'Erro interno do servidor'
    });
  }
});

module.exports = router; 