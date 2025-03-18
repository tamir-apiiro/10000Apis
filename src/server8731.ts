
const express = require('express')
import {handler8731} from "./handler8731";
const app = express()
app.get('/8731', handler8731)
app.listen(3000, () => {})
        