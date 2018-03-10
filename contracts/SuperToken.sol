pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract SuperToken is MintableToken {  
   string public constant NAME = "SuperToken"; // solium-disable-line uppercase
  string public constant SYMBOL = "SUPE"; // solium-disable-line uppercase
  uint8 public constant DECIMALS = 18; // solium-disable-line uppercase

  uint256 public constant INITIAL_SUPPLY = 100; // 10000 * (10 ** uint256(DECIMALS));

  function SuperToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    Transfer(0x0, msg.sender, INITIAL_SUPPLY);
  }     
}  