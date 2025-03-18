
const express = require('express')
import {handler8977} from "./handler8977";
const app = express()
app.get('/8977', handler8977)
app.listen(3000, () => {})
        