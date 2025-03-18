
const express = require('express')
import {handler8468} from "./handler8468";
const app = express()
app.get('/8468', handler8468)
app.listen(3000, () => {})
        