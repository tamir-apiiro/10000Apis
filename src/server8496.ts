
const express = require('express')
import {handler8496} from "./handler8496";
const app = express()
app.get('/8496', handler8496)
app.listen(3000, () => {})
        