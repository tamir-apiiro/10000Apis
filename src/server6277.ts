
const express = require('express')
import {handler6277} from "./handler6277";
const app = express()
app.get('/6277', handler6277)
app.listen(3000, () => {})
        