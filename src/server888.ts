
const express = require('express')
import {handler888} from "./handler888";
const app = express()
app.get('/888', handler888)
app.listen(3000, () => {})
        