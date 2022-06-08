

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/Nz7bwUnYbu8MrBco_2k41CNGKRuTlBJo',
      accounts: ['3fd32e87bf10806a105ce7ddac9a0b74c4b289b87681409acee8a291e6f270ba'],
    },
  },
};