
const express = require('express')
import {handler632} from "./handler632";
const app = express()
app.get('/632', handler632)
app.listen(3000, () => {})
        