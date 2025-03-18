
const express = require('express')
import {handler6199} from "./handler6199";
const app = express()
app.get('/6199', handler6199)
app.listen(3000, () => {})
        