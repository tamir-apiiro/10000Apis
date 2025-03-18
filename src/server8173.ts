
const express = require('express')
import {handler8173} from "./handler8173";
const app = express()
app.get('/8173', handler8173)
app.listen(3000, () => {})
        