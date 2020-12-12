const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'window world question umbrella page century quit derive hollow neutral drum ankle',
     'https://rinkeby.infura.io/v3/bb539bfa1d7540978bd78dbfa2f6a3bc'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};
deploy();