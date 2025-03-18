
const express = require('express')
import {handler6330} from "./handler6330";
const app = express()
app.get('/6330', handler6330)
app.listen(3000, () => {})
        