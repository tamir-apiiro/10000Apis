
const express = require('express')
import {handler6300} from "./handler6300";
const app = express()
app.get('/6300', handler6300)
app.listen(3000, () => {})
        