import { useNavigate } from "react-router-dom"
import {
  Typography,
  SvgIcon
} from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

/*** Types & Interfaces ***/
interface PerpetualsMarketsType {
  label: string;
  year?: number;
  id?: number;
}

// interface CustomContentRendererProps {
//     direction: string, 
//     label: PerpetualsMarketsType
// }
/*** End ***/

export default function CustomContentRenderer(direction: string, label: PerpetualsMarketsType) {
  const navigate = useNavigate()

  return (
    <div
      className={`notification__custom--success`}
      style={{ width: "100%" }}
    >
      <div className="rnc__notification-item rnc__notification-item--info">
        <div className="rnc__notification-content">
          <div className="rnc__notification-close-mark"></div>
          <Typography className="rnc__notification-message" sx={{ fontSize: "13px", color: "#ffffff" }}>
            <>Opened {direction} Position {label}</>
          </Typography>
          <div className="notification__custom-icon" style={{
            fontSize: "10px", color: '#ffffff',
            position: 'absolute',
            bottom: '5px',
            right: '17px'
          }}>
            <Typography sx={{ fontSize: "10px", color: "#ffffff", display: 'inline-block' }}>
              View transaction &nbsp;
            </Typography>
            <SvgIcon fontSize="inherit"
              color="inherit"
              sx={{ verticalAlign: 'middle' }}
              component={OpenInNewIcon}
              onClick={() => navigate(`/`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}