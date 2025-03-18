
const express = require('express')
import {handler7001} from "./handler7001";
const app = express()
app.get('/7001', handler7001)
app.listen(3000, () => {})
        