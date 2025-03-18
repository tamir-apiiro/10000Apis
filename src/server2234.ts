
const express = require('express')
import {handler2234} from "./handler2234";
const app = express()
app.get('/2234', handler2234)
app.listen(3000, () => {})
        