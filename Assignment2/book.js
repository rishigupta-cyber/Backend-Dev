function createBook(bookId, title, author, price) {
    return {
        bookId: bookId,
        title: title,
        author: author,
        price: price
    }
}

export default { createBook }
