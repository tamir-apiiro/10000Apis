
const express = require('express')
import {handler6494} from "./handler6494";
const app = express()
app.get('/6494', handler6494)
app.listen(3000, () => {})
        