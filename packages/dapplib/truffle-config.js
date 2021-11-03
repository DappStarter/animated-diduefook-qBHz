require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain minor good private flower teach'; 
let testAccounts = [
"0xc9ff5b74fd7aafb0041d6872dd7deaa17351c4dc79ba0c3881af2c0424a203ce",
"0x27c7e48e5b90ecf068e3869a82b9a8b98240390f4972171f734805e0a5f111c6",
"0xba175bf71fe120a667648ae093276cd6d662c28e51ad4212bd1c75561c4bced7",
"0x235283df9bc99cd1f95033b2f0dc8caac400880e51e9bb6f5610a36aa0c38615",
"0xce68df5be85d8f097d4a72b5b05baff0a714c102199bfe9b380899c91f70ff71",
"0x3e96ea5ed780e42bd7ad18f94cbc2f6d2b2dee8490cf8b2e9abedb7b3a1e2aee",
"0xf1efeea5651f7743fd4512d758d321a378d1f4e915da7272ab7e43512f99458c",
"0xa7123de084dbbe8b496471860e8de8bdc5c5590fe836b8bd430158a6ecd219cd",
"0x877fe02a6c05cf294349a868495bb312787870a266d8606b8b2b1b83d6743adc",
"0xc08c681c8a4142448fdd57e246226be091d6f0a4fef7a78fa2eb00a7445a16b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

