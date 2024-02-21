import { useSpring } from "@react-spring/web";

export function usePriceChangeAnimation() {
  const [priceStyle, priceApi] = useSpring(() => ({
    from: { scale: 1 },
  }));

  const animatePriceChange = (setPrice) => {
    priceApi.start({
      from: { scale: 1.5 },
      to: { scale: 1 },
      onRest: (r) => {
        if (r.finished) setPrice;
      },
    });
  };

  return [priceStyle, animatePriceChange];
}
