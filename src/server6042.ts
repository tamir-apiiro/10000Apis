
const express = require('express')
import {handler6042} from "./handler6042";
const app = express()
app.get('/6042', handler6042)
app.listen(3000, () => {})
        