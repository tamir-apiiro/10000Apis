
const express = require('express')
import {handler6222} from "./handler6222";
const app = express()
app.get('/6222', handler6222)
app.listen(3000, () => {})
        