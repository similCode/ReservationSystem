function getCurrentDate() {
    let currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate)
    return currentDate.toString()
}

module.exports = getCurrentDate