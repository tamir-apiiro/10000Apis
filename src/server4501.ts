
const express = require('express')
import {handler4501} from "./handler4501";
const app = express()
app.get('/4501', handler4501)
app.listen(3000, () => {})
        