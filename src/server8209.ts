
const express = require('express')
import {handler8209} from "./handler8209";
const app = express()
app.get('/8209', handler8209)
app.listen(3000, () => {})
        