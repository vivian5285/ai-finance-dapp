import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">👤 个人中心</h2>
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="用户头像"
          className="w-20 h-20 rounded-full border-2 border-blue-400"
        />
        <div>
          <h3 className="text-lg font-semibold">昵称：小白</h3>
          <p className="text-gray-500">钱包地址：0x1234...abcd</p>
          <p className="text-gray-500">会员等级：黄金VIP</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">📊 账户信息</h3>
        <ul className="space-y-2">
          <li className="flex justify-between border-b pb-2">
            <span>账户余额：</span>
            <span className="text-green-500 font-bold">5,000 USDT</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>累计收益：</span>
            <span className="text-blue-500 font-bold">+1,200 USDT</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>累计投资：</span>
            <span className="text-yellow-500 font-bold">3,500 USDT</span>
          </li>
        </ul>
      </div>
      <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
        退出登录
      </button>
    </div>
  );
};

export default Profile;
