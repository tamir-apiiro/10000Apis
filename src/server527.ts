
const express = require('express')
import {handler527} from "./handler527";
const app = express()
app.get('/527', handler527)
app.listen(3000, () => {})
        