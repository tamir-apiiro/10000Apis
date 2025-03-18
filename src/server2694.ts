
const express = require('express')
import {handler2694} from "./handler2694";
const app = express()
app.get('/2694', handler2694)
app.listen(3000, () => {})
        