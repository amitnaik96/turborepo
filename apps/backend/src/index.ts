import express from 'express'
const app = express();

import { VALUE } from "@repo/common/config"
console.log(VALUE);

app.get("/", (req, res) => {
    res.json({
        message : "healthy server!"
    });
});

app.listen(4000);