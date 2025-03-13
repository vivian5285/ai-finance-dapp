import React from "react";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: "deposit" | "withdrawal";
  status: "completed" | "pending" | "failed";
}

const transactions: Transaction[] = [
  { id: "1", date: "2024-03-12", amount: 100, type: "deposit", status: "completed" },
  { id: "2", date: "2024-03-11", amount: -50, type: "withdrawal", status: "pending" },
  { id: "3", date: "2024-03-10", amount: 200, type: "deposit", status: "completed" },
  { id: "4", date: "2024-03-09", amount: -30, type: "withdrawal", status: "failed" },
];

const Transactions: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">交易记录</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">日期</th>
            <th className="p-2 text-left">金额</th>
            <th className="p-2 text-left">类型</th>
            <th className="p-2 text-left">状态</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b">
              <td className="p-2">{tx.date}</td>
              <td className={`p-2 ${tx.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                {tx.amount > 0 ? `+${tx.amount} USDT` : `${tx.amount} USDT`}
              </td>
              <td className="p-2">{tx.type === "deposit" ? "存款" : "取款"}</td>
              <td
                className={`p-2 font-semibold ${
                  tx.status === "completed"
                    ? "text-green-500"
                    : tx.status === "pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {tx.status === "completed" ? "已完成" : tx.status === "pending" ? "进行中" : "失败"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
