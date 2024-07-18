const express = require('express')
const app = express()
const port = 8082

app.use(express.json())
app.get('/',(req, res) => {
	res.send("Hello from GET request")
})

app.post('/', (req, res) => {
	res.send("Hello from POST request")
})

app.post('/foo/bar/', (req, res) => {
	res.json([{"foo":"bar"}])
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

