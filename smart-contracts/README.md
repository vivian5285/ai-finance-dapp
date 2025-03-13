# 🔗 AI Finance DApp - 智能合约

本目录包含 **Solidity 智能合约**，用于管理去中心化投资池、钱包管理等。

## 🛠️ 技术栈
- Solidity
- Hardhat（合约开发框架）
- Ethers.js（与以太坊交互）
- OpenZeppelin（安全合约库）

## 📂 目录结构
```bash
smart-contracts/
│── contracts/     # 智能合约
│   ├── AiFinance.sol        # 主合约
│   ├── InvestmentPool.sol   # 投资池合约
│   ├── WalletManager.sol    # 钱包管理合约
│── scripts/       # 部署脚本
│   ├── deploy.js  # Hardhat 部署脚本
│── test/          # 测试用例
│   ├── AiFinance.test.js
│── hardhat.config.js # Hardhat 配置
│── package.json   # 依赖管理
│── .env           # 环境变量（需手动创建）
│── README.md      # 说明文件
