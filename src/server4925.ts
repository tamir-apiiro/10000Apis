
const express = require('express')
import {handler4925} from "./handler4925";
const app = express()
app.get('/4925', handler4925)
app.listen(3000, () => {})
        