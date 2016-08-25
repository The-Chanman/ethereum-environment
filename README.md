# Ethereum Environment
Some basic solidity projects and shortcuts to getting up and running with smart contracts

This guide assumes you are using a mac with up to date OSX. If you are using linux, you'll have to modify some of the fully qualified file paths (replace `/Users/$USER` with `/home/$USER` on ubuntu). If you are using windows, god help you.

Make sure you have git cli installed. If you aren't sure, run `which git` in a terminal. 
Note: this will not work if you compiled it from the command line. 

Run the following to create a directory to work out of:

    mkdir /Users/$USER/Desktop/Deluxe-Pig
    mkdir /Users/$USER/Desktop/Deluxe-Pig/datadir
    cd /Users/$USER/Desktop/Deluxe-Pig
    git clone https://github.com/The-Chanman/solidity-scripts.git
    

# Setting up private ethereum blockchain sandbox

install geth (see instructions at: https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum)
test that it works:

    which geth
    

Create a geth account in the newly created datadir (no need for a super secure password, its just a test environment sandbox and you may end up wanting to hardcode your pw in scripts in the future for simplicities sake)

    geth --datadir /Users/$USER/Desktop/Deluxe-Pig/datadir account new

copy address and insert it instead of \<address\> in the below command (also feel free to change the "YourName" to your name)

    geth  --identity  "YourName_node" --datadir /Users/$USER/Desktop/Deluxe-Pig/datadir --autodag --networkid 1001 --mine --minerthreads=1 --etherbase "0x<address>" --rpc --rpccorsdomain="http://localhost:3000" --testnet


after a little automatic setup, it should start mining...

in a new terminal (leave geth running)

     geth attach ipc:/Users/$USER/Desktop/Deluxe-Pig/datadir/testnet/geth.ipc

You can now run javascript functions against your geth node.
Some fun things to try...

    eth.accounts;
    personal.unlockAccount(eth.accounts[0]);
    admin.nodeInfo;
    eth.blockNumber;
    personal.newAccount();
    web3.fromWei(eth.getBalance(eth.coinbase))
    eth.getBlock('latest');

For more info on the JS Console: https://github.com/ethereum/go-ethereum/wiki/JavaScript-Console

# Compiling/Deploying your first smart contract

First unlock your coinbase account

Either:

    personal.unlockAccount(eth.coinbase);

Or to unlock for 2 hours (I usually prefer this route since its just a private sandbox):

    personal.unlockAccount(eth.coinbase,"password",7200);
