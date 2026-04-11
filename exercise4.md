Updated Data: db.students.updateOne(
{ name: "Rishi Gupta" },
{ $set: { department: "Computer Science" } }
)
db.students.updateOne(
{ name: "Aman Sharma" },
{ $set: { department: "Mathematics" } }
)
db.students.updateOne(
{ name: "Priya Verma" },
{ $set: { department: "Computer Science" } }
)
db.students.updateOne(
{ name: "Rahul Singh" },
{ $set: { department: "Physics" } }
)
db.students.updateOne(
{ name: "Neha Gupta" },
{ $set: { department: "Mathematics" } }
)

=================================QUIERIES==================================

1. db.students.aggregate([
{
  $group: {
    _id: "$department",
    averageGPA: { $avg: "$gpa" }
  }
}
])

2. db.students.aggregate([
{
  $unwind: "$courses"
},
{
  $group: {
    _id: "$courses",
    totalStudents: { $sum: 1 }
  }
},
{
  $sort: {
    totalStudents: -1
  }
}
])

3. db.students.aggregate([
{
  $project: {
    name: 1,
    gpa: 1,
    totalCourses: { $size: "$courses" }
  }
}
])