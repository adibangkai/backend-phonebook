const express = require("express")
const morgan = require("morgan")
const app = express()

const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.static("build"))

morgan.token("person", req => {
  if (req.method === "POST") return JSON.stringify(req.body)
  return null
})

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :person"))

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method)
  console.log("Path:  ", request.path)
  console.log("Body:  ", request.body)
  console.log("---")
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

app.use(requestLogger)

let persons = [
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  },
  {
    name: "eye",
    number: "15",
    id: 9
  },
  {
    name: "geefe",
    number: "314516",
    id: 11
  },
  {
    name: "yest",
    number: "2412512",
    id: 12
  }
]

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>")
})

app.get("/api/persons", (request, response) => {
  response.json(persons)
})

app.get("/info", (request, response) => {
  response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date().toString()}</p>`)
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const max = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0

  const maxId = Math.floor(Math.random() * Math.floor(100))
  return maxId
}

app.post("/api/persons", (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "name/ is missing"
    })
  }
  const duplicateName = persons.filter(person => person.name === body.name)

  if (duplicateName.length) {
    return response.status(400).json({
      error: "name already exists"
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})
app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
