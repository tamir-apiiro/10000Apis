
const express = require('express')
import {handler6115} from "./handler6115";
const app = express()
app.get('/6115', handler6115)
app.listen(3000, () => {})
        