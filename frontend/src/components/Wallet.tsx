import { useState } from "react";
import { ethers } from "ethers";

const Wallet = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("连接钱包失败", error);
      }
    } else {
      alert("请安装 Metamask 钱包！");
    }
  };

  return (
    <div className="p-4 text-center">
      {account ? (
        <p>已连接: {account.slice(0, 6)}...{account.slice(-4)}</p>
      ) : (
        <button onClick={connectWallet} className="bg-blue-500 px-4 py-2 rounded text-white">
          连接钱包
        </button>
      )}
    </div>
  );
};

export default Wallet;
