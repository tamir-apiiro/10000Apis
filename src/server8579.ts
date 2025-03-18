
const express = require('express')
import {handler8579} from "./handler8579";
const app = express()
app.get('/8579', handler8579)
app.listen(3000, () => {})
        