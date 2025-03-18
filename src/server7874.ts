
const express = require('express')
import {handler7874} from "./handler7874";
const app = express()
app.get('/7874', handler7874)
app.listen(3000, () => {})
        