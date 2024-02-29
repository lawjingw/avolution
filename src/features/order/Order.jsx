import { formatCurrency } from "../../utils/helpers";
import OrderRow from "./OrderRow";

function Order({ order }) {
  const tip = order.totalPrice * order.tip;
  return (
    <div className="w-[1100px] bg-stone-100 px-4 py-10">
      <div className="bg-white px-6 py-4">
        <h2 className="text-lg font-semibold">
          Your order <span className="text-blue-500">#{order.orderId}</span>
        </h2>
        <div className="flex justify-between space-x-16 text-sm font-medium">
          <div className="basis-3/5">
            <table className="w-full border-separate border-spacing-y-3">
              <tbody className="align-top">
                {order.cart.map((item, i) => {
                  return <OrderRow key={`${item.id}${i}`} item={item} />;
                })}
                <tr>
                  <td
                    colSpan="3"
                    className="border border-solid border-stone-100 p-0"
                  />
                </tr>
                <tr>
                  <td colSpan="2">Menu items cost</td>
                  <td className="text-right">
                    {formatCurrency(order.totalPrice)}
                  </td>
                </tr>
                {order.type === "delivery" && (
                  <tr>
                    <td colSpan="2">Delivery cost</td>
                    <td className="text-right">{formatCurrency(0)}</td>
                  </tr>
                )}
                {order.tip > 0 && (
                  <tr>
                    <td colSpan="2">Tip</td>
                    <td className="text-right">{formatCurrency(tip)}</td>
                  </tr>
                )}
                <tr>
                  <td
                    colSpan="3"
                    className="border border-solid border-stone-100 p-0"
                  />
                </tr>
                <tr>
                  <td colSpan="3" className="text-end text-lg">
                    {formatCurrency(order.finalPrice)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="basis-2/5">
            <table className="w-full border-separate border-spacing-y-3">
              <tbody className="align-top">
                <tr>
                  <td>Order type</td>
                  <td className="capitalize">{order.type}</td>
                </tr>
                <tr>
                  <td>Payment</td>
                  <td className="capitalize">{order.payment}</td>
                </tr>
                {order.type === "delivery" && (
                  <tr>
                    <td>Delivery address</td>
                    <td>
                      <p>{order.addressLineOne}</p>
                      {order.addressLineTwo && <p>{order.addressLineTwo}</p>}
                      <p>{order.city}</p>
                      {order.county && <p>{order.county}</p>}
                      <p>{order.postcode}</p>
                      <p>{order.country}</p>
                    </td>
                  </tr>
                )}
                <tr>
                  <td>Customer</td>
                  <td>
                    <p>
                      {order.firstName}&nbsp;{order.lastName}
                    </p>
                    <p>{order.phone}</p>
                    <p>{order.email}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
