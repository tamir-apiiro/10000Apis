
const express = require('express')
import {handler8944} from "./handler8944";
const app = express()
app.get('/8944', handler8944)
app.listen(3000, () => {})
        