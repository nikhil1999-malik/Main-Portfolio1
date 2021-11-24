const express = require("express")
const Contact = require("../Backend/Midlleware")
const cors = require("cors")
const SignIn = require("../Backend/Schema/SignInUser")

const app = new express()
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())


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

app.post("/signin", async (req, res) => {

    const { FirstN, Email, Password, CPassword } = req.body;

    const user = new SignIn({
        FirstN: FirstN,
        Email: Email,
        Password: Password,
        CPassword: CPassword
    })

    try {
        await user.save()
        res.send({ message: "User has been registered. Please Login Now!" })

    } catch (e) {
        res.send({ message: "Error is Signing. Please Sign In again!" })
    }
})

app.get("/login", async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await SignIn.FindCredentials(Email, Password)
        res.send(user, { message: "Login succesfull" })

    } catch {
        res.send({ message: "Incorrect Credentials" })
    }
})


app.listen(5000, () => {
    console.log("Port is running on 5000")
})

