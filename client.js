const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
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