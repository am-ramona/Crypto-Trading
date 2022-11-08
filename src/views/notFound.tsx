import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

const NotFound = () => {
    const navigate = useNavigate();
    
    return (
        <section
            style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gridTemplateRows: "144px 12px 14px auto",
                rowGap: "26px",
                padding: "113px 0 172px 0",
            }}
        >
            <code style={{ fontSize: "144px", fontWeight: "100" }}>404</code>
            {/* <div>404 - Not Found!</div> */}
            <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ lineHeight: 1 }}
            >
                There's nothing here.
            </Typography>
            <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                style={{ lineHeight: 1 }}
            >
                {" "}
                Find what you are looking for on our Homepage.
            </Typography>
            <Button
                variant="outlined"
                sx={{
                    // my: 2,
                    color: "#ff31b9ff",
                    width: "fit-content",
                    margin: "auto",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#951369",
                    textDecoration: "none",
                    "&:hover": {
                        borderColor: "#ff31b9ff",
                    },
                }}
                onClick={() => navigate(`/`)}
            >
                Escher Home
            </Button>
        </section>
    );
};

export default NotFound;
