const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 },
    { name: 'Product 6', price: 60 },
    { name: 'Product 7', price: 70 },
    { name: 'Product 8', price: 80 },
    { name: 'Product 9', price: 90 },
    { name: 'Product 10', price: 100 },
    { name: 'Product 11', price: 110 },
    { name: 'Product 12', price: 120 },
    { name: 'Product 13', price: 130 },
    { name: 'Product 14', price: 140 },
    { name: 'Product 15', price: 150 },
    { name: 'Product 16', price: 160 },
    { name: 'Product 17', price: 170 },
    { name: 'Product 18', price: 180 },
    { name: 'Product 19', price: 190 },
    { name: 'Product 20', price: 200 },
    { name: 'Product 21', price: 210 },
    { name: 'Product 22', price: 220 },
    { name: 'Product 23', price: 230 },
    { name: 'Product 24', price: 240 },
    { name: 'Product 25', price: 250 },
    { name: 'Product 26', price: 260 },
    { name: 'Product 27', price: 270 },
    { name: 'Product 28', price: 280 },
    { name: 'Product 29', price: 290 },
    { name: 'Product 30', price: 300 }
]

const pageParamValidation = (currentPage, rowsPerPage, totalItems) => {
    const rowsPerPageOptions = [5, 10, 15, 20]
    if (!rowsPerPageOptions.includes(rowsPerPage)) {
        return { error: `Invalid rowsPerPage` }
    }
    const maxPage = Math.ceil(totalItems / rowsPerPage)
    if (currentPage > maxPage) {
        return { error: `Invalid currentPage` }
    }
    return { currentPage, rowsPerPage, maxPage }
}

const splitProducts = (currentPage, rowsPerPage) => {
    const totalItems = products.length
    const { error, maxPage } = pageParamValidation(currentPage, rowsPerPage, totalItems)
    if (error) {
        return { error }
    }
    const startRender = (currentPage - 1) * rowsPerPage
    const endRender = startRender + rowsPerPage
    const splitedProducts = products.slice(startRender, endRender)
    return { splitedProducts, currentPage, maxPage }
}

module.exports = { splitProducts, pageParamValidation}
