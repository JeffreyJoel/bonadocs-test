
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });
import '@bonadocs/docgen';

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
const ALCHEMY_SEPOLIA_API_KEY_URL = process.env.ALCHEMY_SEPOLIA_API_KEY_URL;


module.exports = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    arbitrumSepolia: {
      url: 'https://sepolia-rollup.arbitrum.io/rpc',
      chainId: 421614,
      accounts: [ACCOUNT_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    },
  },

  docgen: {
    projectName: 'Todo',
    projectDescription: 'An sample web3 protocol.',
    outputDir: "./site",
    deploymentAddresses: {
      Todo: [
        {
          chainId: 11155111,
          address: "0x376AbaAD0dE8Ee1e9FA6f47715F5898F549Aa3F5",
        },
      ],
    },
  }, 
};