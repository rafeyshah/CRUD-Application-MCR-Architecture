module.exports = {
    getAll(req, res) {
        res.send({
            name: "Harry Potter",
            type: "movie",
            start_date: "10-02-2023",
            userId: "1223"
        })
    }
}