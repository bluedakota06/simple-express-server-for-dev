# A simple HTTP server using express

1. Create `server.js` and add the following contents
2. Start server by running `node server.js`
3. Test GET
4. Test POST

server.js
```javascript
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

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

```

GET script 
```bash
curl -X GET http://localhost:8082
```

POST script 
```bash
curl -X POST http://localhost:8082
```

# Returns JSON in GET 
Replace JSON body
```javascript
app.post('/foo/bar', (req, res) => {
	res.json([{"foo":"bar"}])
})
```
Test
```bash
curl -X POST http://localhost:8082/foo/bar
```


