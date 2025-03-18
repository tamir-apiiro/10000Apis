
const express = require('express')
import {handler8715} from "./handler8715";
const app = express()
app.get('/8715', handler8715)
app.listen(3000, () => {})
        