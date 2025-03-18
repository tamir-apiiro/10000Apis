
const express = require('express')
import {handler8283} from "./handler8283";
const app = express()
app.get('/8283', handler8283)
app.listen(3000, () => {})
        