
const express = require('express')
import {handler8471} from "./handler8471";
const app = express()
app.get('/8471', handler8471)
app.listen(3000, () => {})
        