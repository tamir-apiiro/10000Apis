
const express = require('express')
import {handler8953} from "./handler8953";
const app = express()
app.get('/8953', handler8953)
app.listen(3000, () => {})
        