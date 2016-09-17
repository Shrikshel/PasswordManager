var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs){
    yargs.options({
      name:{
        demand:true,
        alias:'n',
        description:'Your First Name Goes Here...',
        type:'String'
      }
    }).help('help');
  })
  .help('help')
  .argv;

console.log(argv);

if (argv._[0] === 'hello' && typeof argv.name != 'undefined'){//} && typeof argv.lname != 'undefined') {
  console.log('Hello ' + argv.name + " " + argv.lname);
} else {
  console.log('Hello World!');
}
