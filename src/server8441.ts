
const express = require('express')
import {handler8441} from "./handler8441";
const app = express()
app.get('/8441', handler8441)
app.listen(3000, () => {})
        