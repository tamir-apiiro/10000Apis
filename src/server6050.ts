
const express = require('express')
import {handler6050} from "./handler6050";
const app = express()
app.get('/6050', handler6050)
app.listen(3000, () => {})
        