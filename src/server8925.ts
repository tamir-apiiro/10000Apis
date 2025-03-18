
const express = require('express')
import {handler8925} from "./handler8925";
const app = express()
app.get('/8925', handler8925)
app.listen(3000, () => {})
        