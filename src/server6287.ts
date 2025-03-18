
const express = require('express')
import {handler6287} from "./handler6287";
const app = express()
app.get('/6287', handler6287)
app.listen(3000, () => {})
        