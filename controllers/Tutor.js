const getTutors = (req, res) => {
    res.json(
        [
            {
                "NAME": "John Doe",
                "PHONE NO": "8055569786",
                "CITY": "New York"
            },
            {
                "NAME": "Lassa Dsayle",
                "PHONE NO": "8055569786",
                "CITY": "Lagos"
            },
            {
                "NAME": "Loarry Page",
                "PHONE NO": "8055569786",
                "CITY": "London"
            },
            {
                "NAME": "John Henry",
                "PHONE NO": "8055569786",
                "CITY": "Paris"
            },
            {
                "NAME": "Kalvin Le",
                "PHONE NO": "8055569786",
                "CITY": "Madrid"
            },
            {
                "NAME": "Maxwell Lea",
                "PHONE NO": "8055569786",
                "CITY": "Rome"
            }
        ]
    )
}

module.exports = {
    getTutors
};