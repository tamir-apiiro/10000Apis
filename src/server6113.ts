
const express = require('express')
import {handler6113} from "./handler6113";
const app = express()
app.get('/6113', handler6113)
app.listen(3000, () => {})
        