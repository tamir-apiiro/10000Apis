
const express = require('express')
import {handler8316} from "./handler8316";
const app = express()
app.get('/8316', handler8316)
app.listen(3000, () => {})
        