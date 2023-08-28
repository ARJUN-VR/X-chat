const output = document.getElementById("output");
const message = document.getElementById("message");
const send = document.getElementById("send");
const users = document.querySelector('.users');

console.log('hi');

const socket = io.connect('http://localhost:3000');



const querystring=window.location.search
const urlParams = new URLSearchParams(querystring);
const username = urlParams.get('username')
const roomname = urlParams.get('roomname')
console.log(username,roomname);