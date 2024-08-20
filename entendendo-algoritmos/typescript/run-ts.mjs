import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path, { dirname } from 'node:path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileName = process.argv[2];

if (!fileName) {
  console.error('Por favor, forneça o nome do arquivo TypeScript para executar.');
  process.exit(1);
}

const tsFile = path.join(__dirname, fileName);
const jsFile = tsFile.replace('.ts', '.js');

try {
  // Compila o arquivo TypeScript
  execSync(`npx tsc ${tsFile}`, { stdio: 'inherit' });
  
  // Executa o arquivo JavaScript resultante
  execSync(`node ${jsFile}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Ocorreu um erro:', error.message);
  process.exit(1);
}