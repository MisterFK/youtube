import { useEffect } from "react";
import { useState } from "react";
import { frFormat, translate } from "../../Tools/tools";
import { userRequest } from "../Tools/requestMethods";
import "./widgetLg.css";
import { format, register } from "timeago.js";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  register("fr", frFormat);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("order/ordersUsers");
        setOrders(res.data);
      } catch (error) {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    console.log(translate("status", type));
    return (
      <button className={"widgetLgButton " + type}>
        {translate("status", type)}
      </button>
    );
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Dernières transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Client</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Montant</th>
          <th className="widgetLgTh">Statut</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{order.output}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt, "fr")}</td>
            <td className="widgetLgAmount">{order.amount}€</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
