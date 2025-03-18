
const express = require('express')
import {handler7246} from "./handler7246";
const app = express()
app.get('/7246', handler7246)
app.listen(3000, () => {})
        