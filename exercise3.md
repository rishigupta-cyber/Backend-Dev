1. db.courses.insertMany([
{
  courseCode: "CS101",
  courseName: "Programming Basics",
  credits: 3,
  prerequisites: []
},
{
  courseCode: "CS102",
  courseName: "Data Structures",
  credits: 4,
  prerequisites: ["CS101"]
},
{
  courseCode: "CS201",
  courseName: "Advanced Java",
  credits: 4,
  prerequisites: ["CS101", "CS102"]
}
])

2. db.professors.insertOne({
  professorId: "P001",
  name: "Dr. Sharma",
  email: "sharma@university.edu",
  departments: ["Computer Science", "Mathematics"]
})

3. Step-1: db.students.find().pretty()
   Step-2: db.courses.find().pretty()
   Step-3: db.grades.insertOne({
  studentId: ObjectId("PASTE_STUDENT_ID_HERE"),
  courseId: ObjectId("PASTE_COURSE_ID_HERE"),
  grade: "A",
  semester: "Spring 2026"
})
 