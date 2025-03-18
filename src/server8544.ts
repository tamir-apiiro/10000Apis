
const express = require('express')
import {handler8544} from "./handler8544";
const app = express()
app.get('/8544', handler8544)
app.listen(3000, () => {})
        