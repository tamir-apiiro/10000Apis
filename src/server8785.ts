
const express = require('express')
import {handler8785} from "./handler8785";
const app = express()
app.get('/8785', handler8785)
app.listen(3000, () => {})
        