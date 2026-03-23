//Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

//Permitir aceita JSON na requisição
app.use(express.json())

const tarefas = [
    {
        id: 1,
        title: "Atividade Hitória",
        description: "Ler o capítulo 5 do livro de história",
        status: "Pendente",
    },
]
 
 
//Ver todas as tarefas
app.get("/tarefas", function (req, res) {
    res.json(tarefas)
})
 
app.get("/tarefas/:id", function (req, res) {
    const id = parseInt(req.params.id)
    const tarefa = tarefas.find(t => t.id === id)
 
    if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" })
    }
    return res.json(tarefa)
})
 

//Criar tarefa
app.post("/tarefas", function (req, res) {
    const { title, status, description } = req.body
 
    if (!title || !status || !description) {
        return res.status(400).json({ mensagem: "Dados inválidos" })
    }
 
    const novaTarefa = {
        id: tarefas.length + 1,
        title: title,
        status: status,
        description: description
    }
 
    tarefas.push(novaTarefa)
    return res.status(201).json(novaTarefa)
})
 

//Atualizar tarefa
app.put("/tarefas/:id", function (req, res) {
    const id = parseInt(req.params.id)
    const { title, status, description } = req.body
    const tarefaIndex = tarefas.findIndex(t => t.id === id)
 
    if (tarefaIndex === -1) {
        return res.status(404).json({ error: "Tarefa não encontrada" })
    }
    
    if (!title || !status || !description) {
        return res.status(400).json({ mensagem: "Dados inválidos" })
    }

    tarefas[tarefaIndex] = { id, title, status, description }
    return res.json(tarefas[tarefaIndex])
})


//Deletar a tarefa
app.delete("/tarefas/:id", function (req, res) {
    const id = parseInt(req.params.id)
    const tarefaIndex = tarefas.findIndex(t => t.id === id)

    if (tarefaIndex === -1) {
        return res.status(404).json({ error: "Tarefa não encontrada" })
    }

    tarefas.splice(tarefaIndex, 1)
    return res.status(204).send()
})


// Acessar Servidor
app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
})
 