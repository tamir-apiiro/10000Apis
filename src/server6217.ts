
const express = require('express')
import {handler6217} from "./handler6217";
const app = express()
app.get('/6217', handler6217)
app.listen(3000, () => {})
        