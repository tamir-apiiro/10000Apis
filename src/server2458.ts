
const express = require('express')
import {handler2458} from "./handler2458";
const app = express()
app.get('/2458', handler2458)
app.listen(3000, () => {})
        