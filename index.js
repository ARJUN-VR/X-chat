const http = require('http');
const express=require('express')
const app = express()
const server = http.createServer(app);
const io = require('socket.io')(server);



const bodyParser = require('body-parser');



const chatController = require('./controller/chat')

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joined-user', (data) => {
        // Broadcast the event to all connected clients
        io.emit('joined-user', data);
    });

    // Define more event handlers as needed
});


app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/room',chatController.LoadRoom)

app.get('/room',(req,res)=>{
    res.render('room')
})


server.listen(3000,(req,res)=>{
    console.log("http://localhost:3000");
})