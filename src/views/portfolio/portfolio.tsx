import StockChart from "../../components/stockChart";
import LabTabs from "../../components/common/dataGrid/tabs";
import Collateral_Leverage from '../../shared/components/collateral_leverage/collateral_leverage';
import { pages } from './portfolioConstants';
// import { useStyles, PrettoSlider } from './styles';
import './portfolioStyles';

function Portfolio() {

  return (
    <div
      className="portfolioWrapper"
      style={{
        display: "grid",
        // gridTemplateColumns: 'repeat(2, 1fr)',
        gap: "15px",
        gridTemplateRows: "auto",
        gridTemplateAreas: `
                "main sidebar"
                "footer footer"`,
        position: "relative",
        gridTemplateColumns: "68% auto",
        // -ms-grid-columns: 62% auto;
        padding: "0 24px",
        maxWidth: "100vw",
      }}
    >
      <StockChart />
      <Collateral_Leverage />
      <LabTabs id="portfolio-dataGrid" pages={pages} />
    </div>
  );
}

export default Portfolio;
