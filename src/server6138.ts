
const express = require('express')
import {handler6138} from "./handler6138";
const app = express()
app.get('/6138', handler6138)
app.listen(3000, () => {})
        