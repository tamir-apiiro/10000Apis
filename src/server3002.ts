
const express = require('express')
import {handler3002} from "./handler3002";
const app = express()
app.get('/3002', handler3002)
app.listen(3000, () => {})
        