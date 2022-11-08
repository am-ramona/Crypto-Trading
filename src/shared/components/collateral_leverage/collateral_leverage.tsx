import BoxComponent from "../../../components/common/box"
import { Box } from "@mui/material";
import { marks } from './collateral_leverageConstants'
import { useStyles, PrettoSlider } from './styles'
// import './portfolioStyles'

function Collateral_Leverage() {
  const classes = useStyles();

  function valuetext(value: number) {
    return `${value}%`;
  }

  return (
    <Box
      sx={{
        gridArea: "sidebar",
        width: "100%",
        maxWidth: "100vw",
        color: "#ff31b9ff",
        margin: "auto",
        border: "1px solid #ff31b9ff",
        borderRadius: 0,
        marginLeft: "auto",
        "& > .MuiBox-root > .MuiBox-root": {
          p: 1,
          borderRadius: 0,
          // fontSize: '0.875rem',
          // fontWeight: '700',
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, auto)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"title1 title1"
        "left1 right1"
        "left2 right2"
        "left3 right3"
        "left4 right4"
        "left5 right5"
        "left6 right6"
        "left7 right7"
        "left8 right8"
        "title2 title2"
        "footer footer"`,
          padding: { xs: "25px 15px", md: "25px 73px" },
        }}
      >
        <Box
          sx={{
            gridArea: "title1",
            justifySelf: "center",
            padding: "0 0 18px !important",
            width: "100%",
          }}
        >
          <BoxComponent>Collateral & Leverage</BoxComponent>
        </Box>
        <Box
          sx={{
            gridArea: "left1",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Total Collateral :
        </Box>
        <Box
          sx={{
            gridArea: "right1",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          $10000.00
        </Box>
        <Box
          sx={{
            gridArea: "left2",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Total National :
        </Box>
        <Box
          sx={{
            gridArea: "right2",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          $-.--
        </Box>
        <Box
          sx={{
            gridArea: "left3",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Free Margin :
        </Box>
        <Box
          sx={{
            gridArea: "right3",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          $100000.00
        </Box>
        <Box
          sx={{
            gridArea: "left4",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Margin Ratio :
        </Box>
        <Box
          sx={{
            gridArea: "right4",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          10%
        </Box>
        <Box
          sx={{
            gridArea: "left5",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Leverage :
        </Box>
        <Box
          sx={{
            gridArea: "right5",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          0x
        </Box>
        <Box
          sx={{
            gridArea: "left6",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Max Leverage :
        </Box>
        <Box
          sx={{
            gridArea: "right6",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          50x
        </Box>
        <Box
          sx={{
            gridArea: "left7",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Unrealized PnL :
        </Box>
        <Box
          sx={{
            gridArea: "right7",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          $-.--
        </Box>
        <Box
          sx={{
            gridArea: "left8",
            justifySelf: "start",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          Unrealized Funding :
        </Box>
        <Box
          sx={{
            gridArea: "right8",
            justifySelf: "end",
            padding: "0 8px !important",
            fontSize: "13px",
          }}
        >
          $-.--
        </Box>
        <Box sx={{ gridArea: "title2", padding: "18px 0 0 !important" }}>
          <BoxComponent id="discrete-slider-always">
            Account Health
          </BoxComponent>
        </Box>
        <Box sx={{ gridArea: "footer", padding: "0 8px" }}>
          <PrettoSlider
            // track="inverted"
            size="small"
            defaultValue={30}
            sx={{
              width: "100%",
              color: "#ff31b9ff",
              marginBottom: 0,
              fontSize: "13px",
            }}
            disabled
            // step={1}
            // marks
            // min={0}
            // max={100}
            // valueLabelDisplay="on"
            // aria-label="Custom marks"
            aria-label="Always visible"
            aria-labelledby="discrete-slider-always"
            // defaultValue={20}
            getAriaValueText={valuetext}
            step={10}
            // valueLabelDisplay="auto"
            valueLabelDisplay="on"
            marks={marks}
            // size="small"
            classes={{ markLabel: classes.mark }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Collateral_Leverage;
