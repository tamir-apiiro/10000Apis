
const express = require('express')
import {handler7267} from "./handler7267";
const app = express()
app.get('/7267', handler7267)
app.listen(3000, () => {})
        