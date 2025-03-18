
const express = require('express')
import {handler6354} from "./handler6354";
const app = express()
app.get('/6354', handler6354)
app.listen(3000, () => {})
        