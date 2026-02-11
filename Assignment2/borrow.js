function borrowBooks(member, books) {
    return {
        member: member,
        books: books
    }
}

function calculateTotalBookValue(books) {
    let total = 0

    for (let i = 0; i < books.length; i++) {
        total = total + books[i].price
    }

    return total
}

function calculateLateFine(fineAmount, membershipType) {
    let discount = 0

    if (membershipType === "Normal") {
        discount = fineAmount * 0.05
    } else if (membershipType === "Gold") {
        discount = fineAmount * 0.15
    }

    return fineAmount - discount
}

function displayBorrowSummary(borrowRecord, lateFine) {
    console.log("----- Library Borrowing Summary -----")
    console.log("Member Name:", borrowRecord.member.name)
    console.log("Membership Type:", borrowRecord.member.membershipType)

    console.log("Books Borrowed:")
    for (let i = 0; i < borrowRecord.books.length; i++) {
        console.log(
            "-",
            borrowRecord.books[i].title,
            "by",
            borrowRecord.books[i].author
        )
    }

    let totalValue = calculateTotalBookValue(borrowRecord.books)
    console.log("Total Book Value:", totalValue)

    let finalFine = calculateLateFine(lateFine, borrowRecord.member.membershipType)
    console.log("Late Fine After Discount:", finalFine)
}

export default {
    borrowBooks,
    displayBorrowSummary
}
