
const express = require('express')
import {handler6694} from "./handler6694";
const app = express()
app.get('/6694', handler6694)
app.listen(3000, () => {})
        