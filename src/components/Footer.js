import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import * as React from "react";

export default function Footer(){
    return (
        <div>
            <Copyright/>
        </div>
    );
}

function Copyright(){
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://datahelpdesk.worldbank.org/knowledgebase/articles/898581">
                World Bank
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}