require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
       chainId: 80001,
      url:"https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
      accounts: [`0x${"9976e0e8751cd98bfdce1d9b8f9a46f0a26db3eb624891f8d93671a829343b4d"}`],
    },
  },
};
