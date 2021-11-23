const express = require("express")
const Contact = require("../Backend/Midlleware")
const bodyParser = require("body-parser")

const app = new express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/Dcontact', async (req, res) => {

    const { fname, sname, subject, message } = req.body;


    const contact = new Contact({
        Fname: fname,
        Sname: sname,
        Subject: subject,
        Message: message
    })

    try {
        await contact.save()
        res.send({ message: "Data has been saved" })
    } catch (e) {
        res.send({ message: 'Problem in saving your data' })
    }

})


app.listen(5000, () => {
    console.log("Port is running on 5000")
})

