
const express = require('express')
import {handler2316} from "./handler2316";
const app = express()
app.get('/2316', handler2316)
app.listen(3000, () => {})
        