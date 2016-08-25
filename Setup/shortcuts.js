// Shortcuts.js
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function resetAccountBalances() {
    leftover = 5000420000000000000;
    for (i = 1; i < web3.eth.accounts.length; i++) {
        fromAddress = web3.eth.accounts[i];
        fromBalance = web3.eth.getBalance(fromAddress);
        if (fromBalance > leftover){
            console.log(i);
            web3.eth.sendTransaction({from:fromAddress, to:eth.coinbase, value:(fromBalance-leftover)});
        }
    }
}

function distributeEth(address){
  eth.sendTransaction({from:eth.coinbase, to:address, value:web3.toWei(10)})
}

var balances = function() {
    var decimalPlaces = 2;
    for (var i in eth.accounts) {
        var acct = eth.accounts[i];
        var acctBal = web3.fromWei(eth.getBalance(acct).toFixed(decimalPlaces), "ether");
        console.log("  eth.accounts[" + i + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
    }
}

var unlock = function() {
  personal.unlockAccount(eth.accounts[0],"password",900000);
  personal.unlockAccount(eth.accounts[1],"password",900000);
  personal.unlockAccount(eth.accounts[2],"password",900000);
  personal.unlockAccount(eth.accounts[3],"password",900000);
  personal.unlockAccount(eth.accounts[4],"password",900000);
}
