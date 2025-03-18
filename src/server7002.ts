
const express = require('express')
import {handler7002} from "./handler7002";
const app = express()
app.get('/7002', handler7002)
app.listen(3000, () => {})
        