
const express = require('express')
import {handler6070} from "./handler6070";
const app = express()
app.get('/6070', handler6070)
app.listen(3000, () => {})
        