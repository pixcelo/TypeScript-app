import * as solanaweb3 from '@solana/web3.js'
import { Keypair } from '@solana/web3.js';
import config from './config.json'

let secretKey = Uint8Array.from(config.sollet.SECRET_KEY);
let keypair = Keypair.fromSecretKey(secretKey);
//console.log(keypair);

const main = () => {
    // console.log('hello world');
    //console.log(solanaweb3);
};

main();