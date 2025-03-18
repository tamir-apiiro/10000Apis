
const express = require('express')
import {handler7042} from "./handler7042";
const app = express()
app.get('/7042', handler7042)
app.listen(3000, () => {})
        