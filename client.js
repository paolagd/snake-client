const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    conn.write('Name: PAO');   
    console.log("WO WOOO, you are now playing!")
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log("Data! ", data)
  })
 
  return conn;
};

module.exports = { connect };