
const express = require('express')
import {handler6314} from "./handler6314";
const app = express()
app.get('/6314', handler6314)
app.listen(3000, () => {})
        