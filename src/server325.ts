
const express = require('express')
import {handler325} from "./handler325";
const app = express()
app.get('/325', handler325)
app.listen(3000, () => {})
        