
const express = require('express')
import {handler8222} from "./handler8222";
const app = express()
app.get('/8222', handler8222)
app.listen(3000, () => {})
        