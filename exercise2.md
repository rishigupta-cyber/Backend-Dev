Inserted Data- db.students.insertMany([
{
  name: "Rishi Gupta",
  age: 20,
  email: "rishi@gmail.com",
  courses: ["CS101", "MATH201", "PHY101"],
  gpa: 3.4,
  address: { city: "Delhi", state: "Delhi" }
},
{
  name: "Aman Sharma",
  age: 21,
  email: "aman@gmail.com",
  courses: ["CS102", "PHYS101", "CHEM101", "MATH202", "ENG101", "BIO101"],
  gpa: 3.2,
  address: { city: "Mumbai", state: "Maharashtra" }
},
{
  name: "Priya Verma",
  age: 22,
  email: "priya@gmail.com",
  courses: ["CS201", "MATH301"],
  gpa: 3.9,
  address: { city: "Delhi", state: "Delhi" }
},
{
  name: "Rahul Singh",
  age: 20,
  email: "rahul@gmail.com",
  courses: ["CS101", "CHEM101", "PHY102", "MATH101", "ENG102", "CS202"],
  gpa: 3.1,
  address: { city: "Lucknow", state: "UP" }
},
{
  name: "Neha Gupta",
  age: 23,
  email: "neha@gmail.com",
  courses: ["CS301", "STAT201"],
  gpa: 3.8,
  address: { city: "Mumbai", state: "Maharashtra" }
}
])

=====================================QUERIES============================================
1. db.students.find({
  gpa: { $gte: 3.0, $lte: 3.5 }
})

2. db.students.find({
  $expr: {
    $gt: [
      { $size: "$courses" },
      5
    ]
  }
})

3. db.students.find()
.sort({ gpa: -1 })
.limit(10)

4. db.students.aggregate([
{
  $group: {
    _id: "$address.city",
    count: { $sum: 1 }
  }
}
])