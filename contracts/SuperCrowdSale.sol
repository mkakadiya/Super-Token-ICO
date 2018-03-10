pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";

contract SuperCrowdSale is Crowdsale, TimedCrowdsale {

    function SuperCrowdSale(uint256 _rate, address _wallet, ERC20 _token, uint256 _openingTime, uint256 _closingTime) 
    public
        Crowdsale(_rate, _wallet, _token)
        TimedCrowdsale(_openingTime, _closingTime)
    {

    }

}