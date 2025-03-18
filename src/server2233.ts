
const express = require('express')
import {handler2233} from "./handler2233";
const app = express()
app.get('/2233', handler2233)
app.listen(3000, () => {})
        