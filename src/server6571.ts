
const express = require('express')
import {handler6571} from "./handler6571";
const app = express()
app.get('/6571', handler6571)
app.listen(3000, () => {})
        