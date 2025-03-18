
const express = require('express')
import {handler7925} from "./handler7925";
const app = express()
app.get('/7925', handler7925)
app.listen(3000, () => {})
        