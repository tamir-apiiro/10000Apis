
const express = require('express')
import {handler6387} from "./handler6387";
const app = express()
app.get('/6387', handler6387)
app.listen(3000, () => {})
        