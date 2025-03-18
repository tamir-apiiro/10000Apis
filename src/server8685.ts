
const express = require('express')
import {handler8685} from "./handler8685";
const app = express()
app.get('/8685', handler8685)
app.listen(3000, () => {})
        