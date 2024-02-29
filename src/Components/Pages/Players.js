import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const GameHistory = () => {
  const [history, setHistory] = useState([]);

  const historyMethod = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}players`, {
        token: Cookies.get("token"),
      })
      .then((data) => {
        setHistory(data.data.data);
      })
      .catch(() => {
        setHistory([]);
      });
  };
  useEffect(() => {
    historyMethod();
  }, []);
  return (
    <>
      <div className="py-6">
        <h2 className="text-center py-6">Players report</h2>
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>User Total PNL</th>
                <th>Commission</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {history.map((his, index) => (
                <tr key={index}>
                  <td>{his.name}</td>
                  <td
                    className={his.pnl > 0 ? "text-green-500" : "text-red-500"}
                  >
                    {his.pnl}
                  </td>
                  <td
                    className={
                      his.commission > 0 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {his.commission}
                  </td>
                  <td>
                    <div className="max-w-64 mx-auto">{Date(his.date)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Name</th>
                <th>User Total PNL</th>
                <th>Commission</th>
                <th>Registration Date</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default GameHistory;
