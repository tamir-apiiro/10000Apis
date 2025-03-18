
const express = require('express')
import {handler8489} from "./handler8489";
const app = express()
app.get('/8489', handler8489)
app.listen(3000, () => {})
        