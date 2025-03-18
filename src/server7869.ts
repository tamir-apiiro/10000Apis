
const express = require('express')
import {handler7869} from "./handler7869";
const app = express()
app.get('/7869', handler7869)
app.listen(3000, () => {})
        