
const express = require('express')
import {handler7948} from "./handler7948";
const app = express()
app.get('/7948', handler7948)
app.listen(3000, () => {})
        