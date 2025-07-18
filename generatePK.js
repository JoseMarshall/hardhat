const { HDNodeWallet } = require('ethers/wallet');
const { Mnemonic } = require('ethers');
const { generateMnemonic } = require('bip39');

const mnemonic = ''; // 12 words
// console.log('Your valid mnemonic:', mnemonic);
//

const hd = Mnemonic.fromPhrase(mnemonic);
const baseNode = HDNodeWallet.fromMnemonic(hd);
for (let i = 0; i < 10; i++) {
  const child = baseNode.derivePath(`0/${i}`);
  console.log(`Index ${i}:`);
  console.log('  Address:     ', child.address);
  console.log('  Private Key: ', child.privateKey);
}
