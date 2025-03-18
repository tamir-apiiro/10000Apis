
const express = require('express')
import {handler8510} from "./handler8510";
const app = express()
app.get('/8510', handler8510)
app.listen(3000, () => {})
        