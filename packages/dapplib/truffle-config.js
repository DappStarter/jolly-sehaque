require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong razor pave comfort install civil army giggle'; 
let testAccounts = [
"0x33821301203f56c27edb54ca645db9b01635aa4f46f60abfb5aaf7b3e14d0e7e",
"0x0b784501b25bbb6bb213675a151e047871e1507756939a9d62e42ca287554139",
"0x4c56f022a5c52fb09f5c3a8e9b297faef1ba6212e2a320a06df2aa0101a950a4",
"0x18950ae5086d01f06cabf02a228e4d360dcfeb112c2c45a0145e52876ad89801",
"0xf303c4a550223d3d78c767f4b810cd7aeb9bdb47fc23b3b568dfe76702c207ce",
"0x17a59943722c8c66451e9fb0b39016d365a39628e7da4e20f091582daa86c451",
"0x429f701ae54ce87789289c906849250d60942abbef538cb19aff9bbe4ff4b346",
"0x1a0f41c7c0afee0c437da6a10ec6edd8687a50214239fc8053584144155d5f0c",
"0x47cf90e0e9e4a55b970c685b38ac34890466c4e6554119a013f4d138c7374b0b",
"0xa04d5a82996a8003259c36ae965dfb1d9188df82c2f7f8c8bf87303b42263ed0"
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

