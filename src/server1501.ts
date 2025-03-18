
const express = require('express')
import {handler1501} from "./handler1501";
const app = express()
app.get('/1501', handler1501)
app.listen(3000, () => {})
        