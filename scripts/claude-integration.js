#!/usr/bin/env node

/**
 * 🤖 CLAUDE AI INTEGRATION SCRIPT
 * Monitora e atualiza automaticamente o contexto do projeto
 * 
 * USO:
 * node scripts/claude-integration.js
 * npm run claude-update
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Cores para output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Função para obter informações do Git
function getGitInfo() {
  try {
    const lastCommit = execSync('git rev-parse --short HEAD').toString().trim();
    const lastCommitMessage = execSync('git log -1 --pretty=%B').toString().trim();
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    const hasChanges = execSync('git status --porcelain').toString().trim() !== '';
    
    return {
      lastCommit,
      lastCommitMessage,
      branch,
      hasChanges,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    log('⚠️  Warning: Could not get git info', 'yellow');
    return {
      lastCommit: 'unknown',
      lastCommitMessage: 'unknown',
      branch: 'main',
      hasChanges: false,
      timestamp: new Date().toISOString()
    };
  }
}

// Função para analisar arquivos do projeto
function analyzeProject() {
  const analysis = {
    issues: [],
    features: { implemented: [], planned: [] },
    files: { existing: [], missing: [] },
    buildStatus: 'unknown'
  };

  // Verificar arquivos principais
  const requiredFiles = [
    'package.json',
    'pages/index.js',
    'next.config.js'
  ];

  const optionalFiles = [
    'public/favicon.ico',
    'public/manifest.json',
    '.github/claude-config.json'
  ];

  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      analysis.files.existing.push(file);
    } else {
      analysis.files.missing.push(file);
      analysis.issues.push(`Missing required file: ${file}`);
    }
  });

  optionalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      analysis.files.existing.push(file);
    } else {
      analysis.files.missing.push(file);
    }
  });

  // Analisar pages/index.js se existir
  if (fs.existsSync('pages/index.js')) {
    const indexContent = fs.readFileSync('pages/index.js', 'utf8');
    
    // Verificar função duplicada
    const homeMatches = indexContent.match(/export default function Home|function Home/g);
    if (homeMatches && homeMatches.length > 1) {
      analysis.issues.push('Duplicate Home function detected');
      analysis.buildStatus = 'failing';
    } else {
      analysis.buildStatus = 'likely_success';
    }
    
    // Verificar funcionalidades implementadas
    if (indexContent.includes('<Head>')) analysis.features.implemented.push('SEO meta tags');
    if (indexContent.includes('Igreja Millenium')) analysis.features.implemented.push('Church branding');
    if (indexContent.includes('CONECTAR • DESPERTAR • TRANSFORMAR')) analysis.features.implemented.push('Official tagline');
    if (indexContent.includes('style={{')) analysis.features.implemented.push('Custom styling');
    if (indexContent.includes('svg')) analysis.features.implemented.push('SVG favicon');
  } else {
    analysis.issues.push('Missing main page (pages/index.js)');
    analysis.buildStatus = 'failing';
  }

  // Verificar package.json
  if (fs.existsSync('package.json')) {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      if (packageJson.dependencies?.next) {
        analysis.features.implemented.push(`Next.js ${packageJson.dependencies.next}`);
      }
      
      if (packageJson.dependencies?.react) {
        analysis.features.implemented.push(`React ${packageJson.dependencies.react}`);
      }

      // Verificar scripts personalizados
      if (packageJson.scripts?.['claude-update']) {
        analysis.features.implemented.push('Claude integration scripts');
      }
    } catch (error) {
      analysis.issues.push('Invalid package.json format');
    }
  }

  return analysis;
}

// Função para testar build local
function testBuild() {
  try {
    log('🧪 Testing local build...', 'blue');
    execSync('npm run build', { stdio: 'ignore' });
    log('✅ Build test passed!', 'green');
    return { success: true, error: null };
  } catch (error) {
    log('❌ Build test failed', 'red');
    return { 
      success: false, 
      error: error.stderr ? error.stderr.toString() : 'Unknown build error'
    };
  }
}

// Função para atualizar configuração do Claude
function updateClaudeConfig(gitInfo, analysis, buildTest) {
  const configPath = '.github/claude-config.json';
  let config = {};
  
  // Carregar configuração existente
  if (fs.existsSync(configPath)) {
    try {
      config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    } catch (error) {
      log('⚠️  Warning: Could not parse existing config, creating new one', 'yellow');
    }
  }
  
  // Atualizar status atual
  config.current_status = {
    ...config.current_status,
    build_status: buildTest.success ? 'passing' : 'failing',
    last_commit: gitInfo.lastCommit,
    last_commit_message: gitInfo.lastCommitMessage,
    branch: gitInfo.branch,
    current_issues: analysis.issues,
    last_analysis: gitInfo.timestamp,
    has_uncommitted_changes: gitInfo.hasChanges,
    build_error: buildTest.error
  };
  
  // Atualizar features
  if (analysis.features.implemented.length > 0) {
    config.features = {
      ...config.features,
      implemented: analysis.features.implemented
    };
  }

  // Atualizar estrutura de arquivos
  config.structure = {
    ...config.structure,
    existing_files: analysis.files.existing,
    missing_files: analysis.files.missing
  };
  
  // Atualizar timestamp da integração
  config.claude_integration = {
    ...config.claude_integration,
    last_updated: gitInfo.timestamp,
    last_run: gitInfo.timestamp,
    auto_analysis_count: (config.claude_integration?.auto_analysis_count || 0) + 1
  };
  
  // Salvar configuração atualizada
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  
  return config;
}

// Função para gerar comando de contexto atualizado
function generateContextCommand(config, gitInfo) {
  const status = config.current_status.build_status === 'passing' ? '✅' : '❌';
  const issues = config.current_status.current_issues.length;
  
  const contextCommand = `
🤖 PROJETO ATUALIZADO AUTOMATICAMENTE:

REPO: https://github.com/pedroqvd/igreja-millenium
STATUS: ${status} ${config.current_status.build_status}
COMMIT: ${gitInfo.lastCommit}
ISSUES: ${issues > 0 ? issues + ' encontrada(s)' : 'Nenhuma'}

ANÁLISE COMPLETA: https://github.com/pedroqvd/igreja-millenium/blob/main/.github/claude-config.json

Analise automaticamente o projeto usando os links acima e forneça contexto completo.
  `.trim();
  
  return contextCommand;
}

// Função principal
function main() {
  log('🤖 CLAUDE AI INTEGRATION - Starting Analysis...', 'bold');
  log('===============================================', 'blue');
  
  try {
    // 1. Obter informações do Git
    log('📊 Getting git information...', 'blue');
    const gitInfo = getGitInfo();
    
    // 2. Analisar projeto
    log('🔍 Analyzing project structure...', 'blue');
    const analysis = analyzeProject();
    
    // 3. Testar build (opcional, se não demorar muito)
    log('🧪 Testing build (optional)...', 'blue');
    const buildTest = testBuild();
    
    // 4. Atualizar configuração
    log('📝 Updating Claude configuration...', 'blue');
    const config = updateClaudeConfig(gitInfo, analysis, buildTest);
    
    // 5. Gerar comando de contexto
    const contextCommand = generateContextCommand(config, gitInfo);
    
    // 6. Exibir resultados
    log('===============================================', 'blue');
    log('✅ CLAUDE INTEGRATION UPDATED SUCCESSFULLY!', 'green');
    log('===============================================', 'blue');
    
    log(`📊 Project Status: ${config.current_status.build_status}`, 
         config.current_status.build_status === 'passing' ? 'green' : 'red');
    log(`🔧 Issues Found: ${analysis.issues.length}`, analysis.issues.length === 0 ? 'green' : 'yellow');
    log(`🚀 Features Implemented: ${analysis.features.implemented.length}`, 'blue');
    log(`📝 Last Commit: ${gitInfo.lastCommit}`, 'blue');
    
    if (analysis.issues.length > 0) {
      log('\n📋 ISSUES DETECTED:', 'yellow');
      analysis.issues.forEach(issue => log(`  • ${issue}`, 'red'));
    }
    
    log('\n📋 COMMAND FOR NEW CLAUDE CHATS:', 'bold');
    log('=' .repeat(50), 'blue');
    log(contextCommand, 'green');
    log('=' .repeat(50), 'blue');
    
    // 7. Atualizar arquivo de contexto rápido
    const contextFile = '.github/CLAUDE_CONTEXT.md';
    if (fs.existsSync(contextFile)) {
      let content = fs.readFileSync(contextFile, 'utf8');
      
      // Atualizar comando no arquivo
      const newCommand = contextCommand.replace(/🤖 PROJETO ATUALIZADO AUTOMATICAMENTE:/, '🤖 ANÁLISE AUTOMÁTICA - IGREJA MILLENIUM');
      content = content.replace(
        /```\n🤖 ANÁLISE AUTOMÁTICA[\s\S]*?```/,
        '```\n' + newCommand + '\n```'
      );
      
      fs.writeFileSync(contextFile, content);
      log('📄 Updated CLAUDE_CONTEXT.md', 'green');
    }
    
  } catch (error) {
    log('❌ ERROR during analysis:', 'red');
    log(error.message, 'red');
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  main();
}

module.exports = { main, analyzeProject, getGitInfo };
