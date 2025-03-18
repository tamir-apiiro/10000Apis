
const express = require('express')
import {handler8075} from "./handler8075";
const app = express()
app.get('/8075', handler8075)
app.listen(3000, () => {})
        