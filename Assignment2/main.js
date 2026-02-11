const { createBook } = require("./book").default
const { createMember } = require("./member").default
const { borrowBooks, displayBorrowSummary } = require("./borrow").default

let book1 = createBook(1, "JavaScript Basics", "Ajay Sir", 300)
let book2 = createBook(2, "Web Development", "Satyam Sir", 450)
let book3 = createBook(3, "Data Structures", "Ankit Sir", 500)

let member1 = createMember(101, "Rishi Gupta", "Gold")

let borrowRecord = borrowBooks(member1, [book1, book2, book3])

displayBorrowSummary(borrowRecord, 200)
