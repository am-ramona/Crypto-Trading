import TradeViewChart from "react-crypto-chart";
export default function CryptoChart(props) {
  return (
    <div className="parent" style={{
      overflow: "hidden", ...props
    }}>
      <TradeViewChart pair="BTCBUSD"
        interval="5m"
        containerStyle={{
          minHeight: "100px",
          minWidth: "fit-content",
          marginBottom: "30px"
        }}
        chartLayout={{
          layout: {
            backgroundColor: "black",
            textColor: "white"
          },
          grid: {
            vertLines: {
              color: "#838fa3",
            },
            horzLines: {
              color: "#838fa3",
            }
          },
          crosshair: {
            // mode: CrosshairMode.Normal,
          },
          priceScale: {
            borderColor: "#485c7b"
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false
          }
        }}
        candleStickConfig={{
          upColor: "green",
          downColor: "red",
          borderDownColor: "transparent",
          borderUpColor: "transparent",
          wickDownColor: "gray",
          wickUpColor: "gray"
        }}
      // pair="ETHUSDT"
      />
    </div>
  );
}
