
const express = require('express')
import {handler6594} from "./handler6594";
const app = express()
app.get('/6594', handler6594)
app.listen(3000, () => {})
        