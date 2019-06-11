
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text 
 * @returns {void}
 */

function onDataReceived(text) {

  var arraySTR = text.trim().split(" ")
  console.log(arraySTR)
  var string  = text.trim('').split(" ") 
  
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(arraySTR[0] == 'hello'){
    hello(text);
  }
    else if(text === 'help\n'){
      help();
    }
  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 * 
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * 
 * @param {string} t 
 * @retu
 */

function hello(t){
  arr = t.toString().trim()
  console.log(arr + '!')
}


function help(){
  console.log('choose one of the following commands:\nhelp\nhello\nexit')
}

function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("myriam")