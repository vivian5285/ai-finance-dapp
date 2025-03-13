# 🖥️ AI Finance DApp - 后端

本目录包含 **后端 API 服务器**，用于管理用户数据、资产信息、交易记录等。

## 🛠️ 技术栈
- Node.js + Express.js
- MongoDB（Mongoose ORM）
- JWT（用户认证）
- Web3.js（与区块链交互）

## 📂 目录结构
```bash
backend/
│── config/        # 数据库 & 配置
│   ├── db.js      # 连接 MongoDB
│── controllers/   # 控制器（业务逻辑）
│── models/        # 数据库模型
│── routes/        # API 路由
│── .env           # 环境变量（需手动创建）
│── server.js      # Express 服务器入口
│── package.json   # 依赖管理
│── README.md      # 说明文件
