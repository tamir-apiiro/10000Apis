
const express = require('express')
import {handler8951} from "./handler8951";
const app = express()
app.get('/8951', handler8951)
app.listen(3000, () => {})
        