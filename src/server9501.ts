
const express = require('express')
import {handler9501} from "./handler9501";
const app = express()
app.get('/9501', handler9501)
app.listen(3000, () => {})
        