
const express = require('express')
import {handler6895} from "./handler6895";
const app = express()
app.get('/6895', handler6895)
app.listen(3000, () => {})
        