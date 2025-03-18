
const express = require('express')
import {handler8719} from "./handler8719";
const app = express()
app.get('/8719', handler8719)
app.listen(3000, () => {})
        