
const express = require('express')
import {handler7749} from "./handler7749";
const app = express()
app.get('/7749', handler7749)
app.listen(3000, () => {})
        