
const express = require('express')
import {handler8478} from "./handler8478";
const app = express()
app.get('/8478', handler8478)
app.listen(3000, () => {})
        