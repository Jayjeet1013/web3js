let Web3 = require("web3");
let provider= new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

let web3 = new Web3(provider);

console.log(web3);;