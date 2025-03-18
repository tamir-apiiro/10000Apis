
const express = require('express')
import {handler2080} from "./handler2080";
const app = express()
app.get('/2080', handler2080)
app.listen(3000, () => {})
        