require('dotenv').config();
const PRIVATE_KEYS = [
  '0x889bf162087bdc554e4ff2d5f06c9dcaf2063d1674cedd97099f9b7053af517e',
  '0x95e916f55dd77a2cc1282805f53ce1cb8808d707936d853c785299c836d178bc',
  '0xc93cd06f87632696a75a304e4230e1cfaed487051efa8cc0280b2d357421beb2',
  '0x441c5d1f5cf15d140b55067b880d53bd80f942f25d2055b1670f31d080db3f29',
  '0x5f41f224dbb20f4abacaf88f664b457559ba823d57a6e147d33b99695fdc8c9e',
  '0x35594096711a3e7f9e78a2089a73a09b748cd0e4c511a0013d1fceecbfaef74d',
  '0xba3747f8929f9f55c5ceaebf5c15eb3c789c8a6c6885d0be65ae8378001894c8',
  '0x1443ea2bccdc0a4f116301210dc337ba8327ad55c6cb13e1f9216c0510f091ce',
  '0xa5d0bb84c47f906d932deccfc6a8e0b1d970edf0517b80988a892116b88dc83c',
  '0xdecf33d7ea475d531fe02069bbb56abba8757e9ff9e830c9d62f2bc149dd08ec',
  '0x2a297e117e1908026998bdda3ed2bd432be609e832e509aa1627c6b4461c317a',
  '0x82c23c01fa46c30c38a67226c4fbf48db603d22589d3854c7ad197c70decc2ec',
  '0x7f1e496c27558d9340441264c2901fc0e0cbf4a66156dd99f9fc5d4516757dc2',
  '0xfeae19fab331d45efbc6fe5c470044f5f2d3b0fd292ab511c2321d45f36d07f8',
  '0xe9ff693c5c7ab05ec827330e5cb0555733eac166ca7ca4cdd96f8f06fd7d3ae0',
  '0x9b468d298f9510423d2f5f9c8577e1e45a71a401ef6c659ad13a313aa9c222df',
  '0x99acd8e2cae495c08650d8c562d3806130a3cf112a4f7301242b58993a4e67dd',
  '0xfd8a2c5f6d093407e4886354eeba2319ff0272bef5842574350f5795caf0e080',
  '0x30ade345b9e4122226a92b44b2610b7e577047afa7e503046137f43eb02c12e9',
  '0x2ed76eb1753e2b883bcdedb14dbd8950ed5788880550bf4d44caf131f6329e5c',
  '0xf8ca4c9ef14892f3d72c1ee32cad65b711e1b23d6612bf8f058e80bd9da8072e',
];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.28',
  networks: {
    hardhat: {
      mining: {
        auto: process.env.MINING_AUTO === 'true',
        interval: process.env.MINING_INTERVAL
          ? Number(process.env.MINING_INTERVAL)
          : 60000, // 1 minute
      },
      forking: {
        url: process.env.BASE_RPC_URL,
        blockNumber: Number(process.env.BASE_BLOCK_NUMBER), // Optional: pin to a specific block for stability
      },

      chainId: Number(process.env.CHAIN_ID),
      accounts: PRIVATE_KEYS.map(privateKey => ({
        privateKey,
        balance: '10000000000000000000000',
      })),
    },
  },
};
