
const express = require('express')
import {handler8002} from "./handler8002";
const app = express()
app.get('/8002', handler8002)
app.listen(3000, () => {})
        