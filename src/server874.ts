
const express = require('express')
import {handler874} from "./handler874";
const app = express()
app.get('/874', handler874)
app.listen(3000, () => {})
        