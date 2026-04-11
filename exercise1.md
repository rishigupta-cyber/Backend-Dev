1. db.students.insertOne({
  name: "Rishi Gupta",
  age: 20,
  email: "rishi@gmail.com",
  courses: ["CS101", "MATH201"],
  gpa: 3.6,
  address: {
    city: "Delhi",
    state: "Delhi"
  },
  enrollmentDate: new Date()
})
2. db.students.find()
3. db.students.findOne({ email: "rishi@gmail.com" })
4. db.students.updateOne(
  { email: "rishi@gmail.com" },
  { $set: { gpa: 3.9 } }
)
5. db.students.deleteOne({ email: "rishi@gmail.com" })