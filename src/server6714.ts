
const express = require('express')
import {handler6714} from "./handler6714";
const app = express()
app.get('/6714', handler6714)
app.listen(3000, () => {})
        