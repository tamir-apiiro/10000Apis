
const express = require('express')
import {handler6454} from "./handler6454";
const app = express()
app.get('/6454', handler6454)
app.listen(3000, () => {})
        