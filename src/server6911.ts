
const express = require('express')
import {handler6911} from "./handler6911";
const app = express()
app.get('/6911', handler6911)
app.listen(3000, () => {})
        