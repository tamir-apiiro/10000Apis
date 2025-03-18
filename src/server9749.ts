
const express = require('express')
import {handler9749} from "./handler9749";
const app = express()
app.get('/9749', handler9749)
app.listen(3000, () => {})
        