// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract InvestmentPool {
    mapping(address => uint256) public deposits;
    uint256 public totalFunds;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Must send ETH");
        deposits[msg.sender] += msg.value;
        totalFunds += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(deposits[msg.sender] >= amount, "Not enough balance");
        deposits[msg.sender] -= amount;
        totalFunds -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdrawn(msg.sender, amount);
    }
}
