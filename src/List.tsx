import { useCallback, useState } from "react";
import Chart from "./Chart";

const symbols = ["NIFTY", "BANKNIFTY", "FINNIFTY"];

function List() {
  const [tvSymbol, setSymbol] = useState("NIFTY");

  const [wlSelectedSymbol, wlSetSelectedSymbol] = useState("");

  const handleOnChange = useCallback((symbol: string) => {
    console.log("symbol change", symbol);
    setSymbol(symbol);
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          minHeight: "95vh",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          {symbols.map((symbol) => (
            <button
              style={{
                border: wlSelectedSymbol === symbol ? "1px solid red" : "",
              }}
              key={symbol}
              onClick={() => {
                wlSetSelectedSymbol(symbol);
                setSymbol(symbol);
              }}
            >
              {symbol}
            </button>
          ))}
        </div>
        <Chart symbol={tvSymbol} onSymbolChange={handleOnChange} />
      </div>
    </>
  );
}

export default List;
