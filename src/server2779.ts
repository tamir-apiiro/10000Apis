
const express = require('express')
import {handler2779} from "./handler2779";
const app = express()
app.get('/2779', handler2779)
app.listen(3000, () => {})
        