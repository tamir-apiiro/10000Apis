
const express = require('express')
import {handler6297} from "./handler6297";
const app = express()
app.get('/6297', handler6297)
app.listen(3000, () => {})
        