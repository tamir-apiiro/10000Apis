
const express = require('express')
import {handler6504} from "./handler6504";
const app = express()
app.get('/6504', handler6504)
app.listen(3000, () => {})
        