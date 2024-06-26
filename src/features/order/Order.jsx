import { formatCurrency } from "../../utils/helpers";
import OrderRow from "./OrderRow";

function Order({ order }) {
  const tip = order.totalPrice * order.tip;
  return (
    <div className="space-y-4 bg-stone-100 px-4 py-10 md:w-[760px] md:py-10 lg:w-[940px] xl:w-[1100px]">
      <div className="flex items-center justify-center space-x-8 bg-white px-6 py-4">
        <div>
          <img src="hourglass.svg" alt="" />
        </div>
        <div className="space-y-1">
          <p className="text-xl font-semibold md:text-2xl">
            Accepted for completion
          </p>
          <p className="text-sm font-bold text-stone-500">
            Your order will be ready within - 10 min
          </p>
        </div>
      </div>
      <div className="bg-white px-6 py-4">
        <h2 className="text-lg font-semibold">
          Your order <span className="text-blue-500">#{order.orderId}</span>
        </h2>
        <div className="flex flex-col justify-between text-sm font-medium md:flex-row md:space-x-16">
          <div className="md:basis-3/5">
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
          <div className="md:basis-2/5">
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
