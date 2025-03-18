
const express = require('express')
import {handler8837} from "./handler8837";
const app = express()
app.get('/8837', handler8837)
app.listen(3000, () => {})
        