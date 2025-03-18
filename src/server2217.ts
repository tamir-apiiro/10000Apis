
const express = require('express')
import {handler2217} from "./handler2217";
const app = express()
app.get('/2217', handler2217)
app.listen(3000, () => {})
        