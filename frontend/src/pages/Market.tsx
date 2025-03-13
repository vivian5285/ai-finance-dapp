import React from "react";

interface MarketData {
  name: string;
  price: number;
  change: number;
}

const marketData: MarketData[] = [
  { name: "BTC", price: 62000, change: 2.1 },
  { name: "ETH", price: 3400, change: -1.3 },
  { name: "BNB", price: 400, change: 0.5 },
  { name: "SOL", price: 180, change: -2.8 },
  { name: "USDT", price: 1.0, change: 0.0 },
];

const Market: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">📈 市场数据</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">币种</th>
            <th className="p-2 text-left">价格 (USDT)</th>
            <th className="p-2 text-left">涨跌幅</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((coin) => (
            <tr key={coin.name} className="border-b">
              <td className="p-2 font-semibold">{coin.name}</td>
              <td className="p-2">{coin.price.toFixed(2)}</td>
              <td
                className={`p-2 font-semibold ${
                  coin.change > 0 ? "text-green-500" : coin.change < 0 ? "text-red-500" : "text-gray-500"
                }`}
              >
                {coin.change > 0 ? `+${coin.change}%` : `${coin.change}%`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Market;
