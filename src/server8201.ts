
const express = require('express')
import {handler8201} from "./handler8201";
const app = express()
app.get('/8201', handler8201)
app.listen(3000, () => {})
        