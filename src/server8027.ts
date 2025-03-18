
const express = require('express')
import {handler8027} from "./handler8027";
const app = express()
app.get('/8027', handler8027)
app.listen(3000, () => {})
        