
const express = require('express')
import {handler6749} from "./handler6749";
const app = express()
app.get('/6749', handler6749)
app.listen(3000, () => {})
        