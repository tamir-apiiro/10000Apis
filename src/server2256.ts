
const express = require('express')
import {handler2256} from "./handler2256";
const app = express()
app.get('/2256', handler2256)
app.listen(3000, () => {})
        