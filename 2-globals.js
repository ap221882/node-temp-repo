//__dirname- path to current directory
//__filename- file name
//require-function to use modules
//module-info about current module(file)
//process-info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(module);

console.log(process);

setTimeout(() => {
  console.log("helo world");
}, 1000);

setInterval(() => {
  console.log("Hello Ajay");
}, 1000);
