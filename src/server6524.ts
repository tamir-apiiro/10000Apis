
const express = require('express')
import {handler6524} from "./handler6524";
const app = express()
app.get('/6524', handler6524)
app.listen(3000, () => {})
        