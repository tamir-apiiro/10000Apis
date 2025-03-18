
const express = require('express')
import {handler8172} from "./handler8172";
const app = express()
app.get('/8172', handler8172)
app.listen(3000, () => {})
        