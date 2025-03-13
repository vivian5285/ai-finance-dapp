// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AiFinance is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1000000 * (10 ** 18); // 100 万代币
    mapping(address => uint256) public investments;

    event Invested(address indexed investor, uint256 amount);
    event Withdrawn(address indexed investor, uint256 amount);

    constructor() ERC20("AiFinance Token", "AIF") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function invest(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _transfer(msg.sender, address(this), amount);
        investments[msg.sender] += amount;
        emit Invested(msg.sender, amount);
    }

    function withdraw(uint256 amount) external {
        require(investments[msg.sender] >= amount, "Not enough funds invested");
        investments[msg.sender] -= amount;
        _transfer(address(this), msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }
}
