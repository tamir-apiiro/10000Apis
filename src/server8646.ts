
const express = require('express')
import {handler8646} from "./handler8646";
const app = express()
app.get('/8646', handler8646)
app.listen(3000, () => {})
        