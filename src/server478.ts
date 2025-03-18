
const express = require('express')
import {handler478} from "./handler478";
const app = express()
app.get('/478', handler478)
app.listen(3000, () => {})
        