import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

export default function ProductPage({ productId, referrer, theme }) {
    //if there was no useCallback call, so handleSubmit is always a new function,
    //and the slowed down ShippingForm component can’t skip re-rendering.
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
