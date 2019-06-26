
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
 * @returns {void}
 */
var tasksArr = [
  {name:'task1.',
done:'no'}, 
{name:'task2.',
done:'yes'}, 
{name:'task3.', done: 'no'},
{name:'task4.', done: 'no'}];


function onDataReceived(text) {
  textsplit=text.trim().split(' ');
  var arraySTR = text.trim().split(" ")
  console.log(arraySTR)
  var string  = text.trim('').split(" ") 
  var newVar = text.trim('').split(" ")

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(arraySTR[0] == 'hello'){
    hello(text);
  }
    else if(text === 'help\n'){
      help();
    }
    else if(text === 'list\n'){
      list();
    }

    else if (text === 'remove\n') { 
      remove();
  }
  else if(text === 'remove1\n') {
    removeFirst();
  }

  else if(text==='edit\n' || textsplit[0] === 'edit'){
    edit(text,textsplit);
}

  else if(text === 'remove2\n') {
    removeSecond();
  }

  else if(textsplit[0]==='add') {
    add(text);
  }
  

  else{
    unknownCommand(text);
  }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * 
 * 
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * 
 *  @param  {string} c the text received
 * @returns {void}
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
function list (text) {
  for (i=0; i<tasksArr.length; i++) {
console.log((i+1)+')'+tasksArr[i])
  }
};

function remove() {
  tasksArr.splice(-1,1);
}

function removeFirst() {
  tasksArr.pop();
}

function removeSecond() {
  tasksArr.shift();
}

function edit(text,textsplit){
  if(text==='edit\n'){
      console.log("\n"+"Error")}
  

else if(textsplit[0]==='edit' && isNaN(textsplit[1])){
  //console.log(task)
  console.log(textsplit)
  tasksArr[tasksArr.length-1].name = textsplit[1]
tasksArr[tasksArr.length-1].done=textsplit[2] 

}

else if(textsplit[0]==='edit' && textsplit[1]==='1'){
  //console.log(textsplit[2]+textsplit[3] + textsplit.length);
  tasksarr[0].name=textsplit[2];
  tasksarr[0].done=textsplit[3];
  list(text)
}

function add(text) {
if (text === 'add\n') {
  console.log('error')


  return "error"
} }}



// The following line starts the application
startApp("myriam")