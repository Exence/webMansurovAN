const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('views'));
app.use(express.urlencoded({extended: false}))


app.get('/', (request, response) =>{
    response.sendFile("index.html")
})

app.post('/',function (request, response) {
    if(!request.body) return response.sendStatus(400);
    fs.writeFileSync("last_registration_data.json", `{\n\t"Login": "${request.body.login}",\n\t"E-mail": "${request.body.email}",\n\t"Password": "${request.body.password}",\n\t"Sex": "${request.body.sex}"\n}`)
    response.send("Данные сохранены в файл last_registration_data.json");
})

let port = 5588;
app.listen(port, () => {
    console.log(`Server is started: http://localhost:${port}`);
})  
