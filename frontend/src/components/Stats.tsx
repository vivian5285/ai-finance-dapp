import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">📊 资产统计</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 text-green-700 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">总资产</h3>
          <p className="text-2xl font-bold">💰 5,000 USDT</p>
        </div>
        <div className="bg-blue-100 text-blue-700 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">今日收益</h3>
          <p className="text-2xl font-bold">📈 +120 USDT</p>
        </div>
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">投资总额</h3>
          <p className="text-2xl font-bold">💸 3,000 USDT</p>
        </div>
        <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">未提现金额</h3>
          <p className="text-2xl font-bold">⏳ 800 USDT</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
