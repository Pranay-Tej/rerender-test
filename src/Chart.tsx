import React, { useEffect } from "react";

type ChartProps = {
  symbol: string;
  onSymbolChange: (symbol: string) => void;
};
let count = 0;

function Chart(props: ChartProps) {
  count += 1;
  console.log("tv rerender", count);
  const { symbol, onSymbolChange } = props;

  useEffect(() => {
    onSymbolChange(symbol);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);
  return (
    <div>
      <p>Symbol: {symbol}</p>

      <button onClick={() => onSymbolChange("TRADING_VIEW")}>Change</button>
    </div>
  );
}

const MemoizedChart = React.memo(Chart);

export default MemoizedChart;
