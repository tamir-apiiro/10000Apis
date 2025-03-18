
const express = require('express')
import {handler8749} from "./handler8749";
const app = express()
app.get('/8749', handler8749)
app.listen(3000, () => {})
        