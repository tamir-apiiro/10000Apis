
const express = require('express')
import {handler3925} from "./handler3925";
const app = express()
app.get('/3925', handler3925)
app.listen(3000, () => {})
        