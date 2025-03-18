
const express = require('express')
import {handler8204} from "./handler8204";
const app = express()
app.get('/8204', handler8204)
app.listen(3000, () => {})
        