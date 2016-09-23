const data = require('node-persist');
data.initSync();

//Playing with arguments
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

//Business Logic
if (argv._[0] === 'get') {
  var acc = getAccount(argv.name);
  console.log(acc);
} else if (argv._[0] === 'create'){
  var acc = {
    name:argv.name,
    username:argv.username,
    password:argv.password
  };
  var update = createAccount(acc);
  console.log('Record Inserted!');
  console.log(update);
} else if (argv._[0] === 'update') {
  var acc = {
    name:argv.name,
    username:argv.username,
    password:argv.password
  };
  var update = updateAccount(argv.name,acc);
  console.log('Updated Account!');
  console.log(update);
} else if (argv._[0] === 'getall') {
  console.log('Listing All Records...');
  var acc = showAll();
  console.log(acc);
} else if (argv._[0] === 'delete') {
  var acc = argv.name;
  var accounts = deleteAccount(acc);
  console.log(accounts);
}


//Create Account
function createAccount(account){
  var accounts = data.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(account);
  data.setItemSync('accounts', accounts);
  return account;
}

//Get account
function getAccount(accountName) {
  var accounts = data.getItemSync('accounts');
  var matchedAccount;

  accounts.forEach(function (account){
    if (account.name === accountName){
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

//Update account
function updateAccount(n,acc) {
  var accounts = data.getItemSync('accounts');
  var matchedAccount;
  accounts.forEach(function (account){
    if (account.name === n){
      matchedAccount = account;
    }
  });

  var index = accounts.indexOf(matchedAccount);
  if (index > -1) {
    accounts.splice(index, 1);
  }


  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(acc);
  data.setItemSync('accounts', accounts);
  return acc;
}

//Show All
function showAll(){
  var accounts = data.getItemSync('accounts');
  return accounts;
}

//Delete Account
function deleteAccount(n) {
  var accounts = data.getItemSync('accounts');
  var matchedAccount;
  accounts.forEach(function (account){
    if (account.name === n){
      matchedAccount = account;
    }
  });

  if(typeof matchedAccount === 'undefined'){
    console.log('Record Not Found!');
    return 'Sorry for that!';
  }else{
    var index = accounts.indexOf(matchedAccount);
    if (index > -1) {
      accounts.splice(index, 1);
    }
    data.setItemSync('accounts', accounts);
    console.log('Account Deleted Successfully!');
    return accounts;
  }
}
