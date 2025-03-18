
const express = require('express')
import {handler7250} from "./handler7250";
const app = express()
app.get('/7250', handler7250)
app.listen(3000, () => {})
        