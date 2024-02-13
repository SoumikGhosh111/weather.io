import { green } from "@mui/material/colors";

export const airQualityChecker = (data) => {
    switch (data) {
        case 1:
            return {
                cat: "Good",
                clr: "var(--green)",
            }
        case 2:
            return {
                cat: "Fair",
                clr: "var(--lightgreen)",
            }
        case 3:
            return{ 
                cat: "Moderate", 
                clr: "var(--yellow)",
            }
        case 4:
            return{ 
                cat: "Poor", 
                clr: "var(--lightred)",
            }
        case 5:
            return{ 
                cat: "Very Poor", 
                clr: "var(--red)",
            };

        default:
            return{ 
                cat: "403 Thats an  error", 
                clr: "",
            }
    }

}