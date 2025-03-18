
const express = require('express')
import {handler6053} from "./handler6053";
const app = express()
app.get('/6053', handler6053)
app.listen(3000, () => {})
        