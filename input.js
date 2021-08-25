// setup interface to handle user input from stdin
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => { 
    handleUserInput(data);
  });

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }else if(key === "w"){
    console.log("Move: up - w") 
    connection.write('Move: up');   
  }else if(key === "a"){
    console.log("Move: left - a")
    connection.write('Move: left');   
  }else if(key === "s"){
    console.log("Move: down - s")
    connection.write('Move: down');    
  }else if(key === "d"){
    console.log("Move: right - d")
    connection.write('Move: right');  
  }
};

module.exports = {setupInput};

