
const express = require('express')
import {handler8389} from "./handler8389";
const app = express()
app.get('/8389', handler8389)
app.listen(3000, () => {})
        