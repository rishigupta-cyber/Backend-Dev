const express = require('express')
const path = require('path')
const { read, write } = require('./modules/fileHandler')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* ================= HOME ================= */

app.get('/', async (req, res) => {
  let employees = await read()

  const search = req.query.search
  if (search) {
    employees = employees.filter(emp =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  res.render('index', { employees })
})

/* ================= ADD ================= */

app.get('/add', (req, res) => {
  res.render('add')
})

app.post('/add', async (req, res) => {
  const { name, gender, department, salary, day, month, year, avatar } = req.body

  const employees = await read()

  const startDate = `${day}-${month}-${year}`

  const newEmployee = {
    id: Date.now(),
    name,
    gender,
    department: Array.isArray(department)
      ? department.join(', ')
      : department,
    salary: Number(salary),
    startDate,
    avatar
  }

  employees.push(newEmployee)
  await write(employees)

  res.redirect('/')
})

/* ================= DELETE ================= */

app.get('/delete/:id', async (req, res) => {
  const employees = await read()
  const filtered = employees.filter(e => e.id != req.params.id)
  await write(filtered)
  res.redirect('/')
})

/* ================= EDIT ================= */

app.get('/edit/:id', async (req, res) => {
  const employees = await read()
  const employee = employees.find(e => e.id == req.params.id)

  if (!employee) return res.redirect('/')

  res.render('edit', { employee })
})

app.post('/edit/:id', async (req, res) => {
  const { name, gender, department, salary, day, month, year, avatar } = req.body

  const employees = await read()
  const index = employees.findIndex(e => e.id == req.params.id)

  if (index === -1) {
    return res.redirect('/')
  }

  let startDate = employees[index].startDate

  if (day && month && year) {
    startDate = `${day}-${month}-${year}`
  }

  employees[index] = {
    id: employees[index].id,
    name,
    gender,
    department: Array.isArray(department)
      ? department.join(', ')
      : department,
    salary: Number(salary),
    startDate,
    avatar
  }

  await write(employees)
  res.redirect('/')
})

/* ================= SERVER ================= */

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})