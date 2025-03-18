
const express = require('express')
import {handler6501} from "./handler6501";
const app = express()
app.get('/6501', handler6501)
app.listen(3000, () => {})
        