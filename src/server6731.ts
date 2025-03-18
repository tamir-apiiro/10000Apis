
const express = require('express')
import {handler6731} from "./handler6731";
const app = express()
app.get('/6731', handler6731)
app.listen(3000, () => {})
        