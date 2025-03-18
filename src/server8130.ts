
const express = require('express')
import {handler8130} from "./handler8130";
const app = express()
app.get('/8130', handler8130)
app.listen(3000, () => {})
        