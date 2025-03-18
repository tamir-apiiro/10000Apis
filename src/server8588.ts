
const express = require('express')
import {handler8588} from "./handler8588";
const app = express()
app.get('/8588', handler8588)
app.listen(3000, () => {})
        