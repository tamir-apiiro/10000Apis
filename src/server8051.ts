
const express = require('express')
import {handler8051} from "./handler8051";
const app = express()
app.get('/8051', handler8051)
app.listen(3000, () => {})
        