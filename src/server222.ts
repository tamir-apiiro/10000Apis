
const express = require('express')
import {handler222} from "./handler222";
const app = express()
app.get('/222', handler222)
app.listen(3000, () => {})
        