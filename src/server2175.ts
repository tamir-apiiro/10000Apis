
const express = require('express')
import {handler2175} from "./handler2175";
const app = express()
app.get('/2175', handler2175)
app.listen(3000, () => {})
        