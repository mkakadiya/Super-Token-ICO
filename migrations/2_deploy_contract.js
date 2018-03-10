var SuperToken=artifacts.require("./SuperToken.sol");
var SuperCrowdSale=artifacts.require("./SuperCrowdSale.sol");

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
  const closingTime = openingTime + 86400 * 20; // 20 days
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  //uint256 _rate, address _wallet, ERC20 _token, uint256 _openingTime, uint256 _closingTime

  return deployer
      .then(() => {
          return deployer.deploy(SuperToken);
      })
      .then(() => {
          return deployer.deploy(
            SuperCrowdSale,
              rate,
              wallet,
              SuperToken.address,
              openingTime,
              closingTime,
          );
      });
};

/*
module.exports = function(deployer, network, accounts) {
  return liveDeploy(deployer, accounts);
  };
  
  function latestTime() {
    return web3.eth.getBlock('latest').timestamp;
  }
  
  const duration = {
    seconds: function(val) { return val},
    minutes: function(val) { return val * this.seconds(60) },
    hours:   function(val) { return val * this.minutes(60) },
    days:    function(val) { return val * this.hours(24) },
    weeks:   function(val) { return val * this.days(7) },
    years:   function(val) { return val * this.days(365)} 
  };

  async function liveDeploy(deployer, accounts){
    
    deployer.deploy(SuperCrowdSale);
  }
  
  async function liveDeploy(deployer, accounts) {
    const BigNumber = web3.BigNumber;
    const RATE = 1;
    const startTime = latestTime() + duration.minutes(1);
    const endTime =  startTime + duration.weeks(1);
    console.log([startTime, endTime, RATE, accounts[0]]);

    deployer.deploy(SuperToken);

    return deployer.deploy(SuperCrowdSale, RATE, accounts[0], startTime, endTime).then( async () => {
      const instance = await SuperCrowdSale.deployed();
      const token = await instance.token.call();
      console.log('Token Address', token);
    })
  }
  */