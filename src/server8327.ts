
const express = require('express')
import {handler8327} from "./handler8327";
const app = express()
app.get('/8327', handler8327)
app.listen(3000, () => {})
        