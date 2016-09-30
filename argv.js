var argv = require('yargs')
  .command('create', 'Add new user.', function(yargs){
    yargs.options({
      name:{
        demand:true,
        alias:'n',
        description:'Your Account Name Here...',
        type:'string'
      },
      username:{
        demand:true,
        alias:'u',
        description:'Your Username Here...',
        type:'string'
      },
      password:{
        demand:true,
        description:'Password here...',
        alias:'p',
        type:'string'
      }
    }).help('help');
  })
  .command('get', 'Get Data.', function(yargs){
    yargs.options({
      name:{
        demand:true,
        alias:'n',
        description:'Account Name...',
        type:'string'
      }
    }).help('help');
  })
  .command('delete', 'Delete Data.', function(yargs){
    yargs.options({
      name:{
        demand:true,
        alias:'n',
        description:'Account Name...',
        type:'string'
      }
    }).help('help');
  })
  .command('getall', 'Get All Data.', function(yargs){

  })
  .command('update', 'Update Account.', function(yargs){
    yargs.options({
      name:{
        demand:true,
        alias:'n',
        description:'Your Account Name Here...',
        type:'string'
      },
      username:{
        demand:true,
        alias:'u',
        description:'Your Username Here...',
        type:'string'
      },
      password:{
        demand:true,
        description:'Password here...',
        alias:'p',
        type:'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;

module.exports = argv;
