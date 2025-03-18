
const express = require('express')
import {handler7779} from "./handler7779";
const app = express()
app.get('/7779', handler7779)
app.listen(3000, () => {})
        