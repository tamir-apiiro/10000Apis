
const express = require('express')
import {handler925} from "./handler925";
const app = express()
app.get('/925', handler925)
app.listen(3000, () => {})
        