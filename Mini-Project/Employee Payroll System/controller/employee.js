const { read, write } = require('../modules/fileHandler')

exports.getHome = async (req, res) => {
  let employees = await read()

  const search = req.query.search
  if (search) {
    employees = employees.filter(emp =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  res.render('index', { employees })
}

exports.getAdd = (req, res) => {
  res.render('add')
}

exports.postAdd = async (req, res) => {
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
}

exports.getEdit = async (req, res) => {
  const employees = await read()
  const employee = employees.find(e => e.id == req.params.id)

  if (!employee) return res.redirect('/')

  res.render('edit', { employee })
}

exports.postEdit = async (req, res) => {
  const { name, gender, department, salary, day, month, year, avatar } = req.body

  const employees = await read()
  const index = employees.findIndex(e => e.id == req.params.id)

  if (index === -1) return res.redirect('/')

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
}

exports.deleteEmployee = async (req, res) => {
  const employees = await read()
  const filtered = employees.filter(e => e.id != req.params.id)
  await write(filtered)
  res.redirect('/')
}