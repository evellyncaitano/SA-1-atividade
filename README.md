# SA1 - Node.Js + Express
API REST simples para gerenciar tarefas
 
## Pré-Requisitos
- Node.js instalado
 
## Como rodar
```bash
npm i 
```
 
### Iniciar o servidor
```bash
node index.js
```
 
### Acessar
Abra o navegador em: `http://localhost:3000`
 
## Endpoints
 
### Tarefas
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tarefas` |Lista todos as tarefas |
| GET | `/tarefas/:id` | Buscar uma tarefa específica |
| PUT | `/tarefas/:id` | Atualiza uma tarefa |
| POST | `/tarefas/` | Cria uma nova tarefa |
| DELET | 	`/tarefas/:id` | Deleta uma tarefa |
 
 
## As tarefas possuem as seguintes propriedades:
- id
- title
- description
- status

 
## Tecnologias
- Node.js
- Express

##Integrantes
- Evellyn Caitano Dias

  ## Notas
  - Os dados são armazenados em memória (reiniciar o servidor apaga tudo)

 
 
 
