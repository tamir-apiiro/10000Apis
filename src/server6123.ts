
const express = require('express')
import {handler6123} from "./handler6123";
const app = express()
app.get('/6123', handler6123)
app.listen(3000, () => {})
        