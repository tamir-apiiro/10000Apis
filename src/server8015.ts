
const express = require('express')
import {handler8015} from "./handler8015";
const app = express()
app.get('/8015', handler8015)
app.listen(3000, () => {})
        