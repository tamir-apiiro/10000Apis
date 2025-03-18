
const express = require('express')
import {handler8227} from "./handler8227";
const app = express()
app.get('/8227', handler8227)
app.listen(3000, () => {})
        