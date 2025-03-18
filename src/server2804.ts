
const express = require('express')
import {handler2804} from "./handler2804";
const app = express()
app.get('/2804', handler2804)
app.listen(3000, () => {})
        