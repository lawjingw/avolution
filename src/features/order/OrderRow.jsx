import { formatCurrency } from "../../utils/helpers";

function OrderRow({ item }) {
  return (
    // <div className="flex justify-between">
    //   <p>
    //     {item.quantity}&nbsp;&nbsp;x&nbsp;&nbsp;{item.name} /{" "}
    //     <span className="inline-block first-letter:uppercase">
    //       {item.category}
    //     </span>
    //     {item.addons?.map((addition, i) => {
    //       return (
    //         <p key={`${addition.id}${i}`} className="ml-7">
    //           + {addition.name} /{" "}
    //           <span className="inline-block first-letter:uppercase">
    //             {item.category} addon-ons
    //           </span>{" "}
    //           ({formatCurrency(addition.price)})
    //         </p>
    //       );
    //     })}
    //   </p>
    //   <p>{formatCurrency(item.totalPrice)}</p>
    // </div>
    <tr>
      <td className="w-fit">{item.quantity}&nbsp;x</td>
      <td>
        {item.name}&nbsp;/&nbsp;
        <span className="inline-block first-letter:uppercase">
          {item.category}
        </span>
        {item.addons?.map((addition, i) => {
          return (
            <p key={`${addition.id}${i}`}>
              + {addition.name} /{" "}
              <span className="inline-block first-letter:uppercase">
                {item.category} addon-ons
              </span>{" "}
              ({formatCurrency(addition.price)})
            </p>
          );
        })}
      </td>
      <td className="text-right">{formatCurrency(item.totalPrice)}</td>
    </tr>
  );
}

export default OrderRow;
