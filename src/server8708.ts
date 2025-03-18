
const express = require('express')
import {handler8708} from "./handler8708";
const app = express()
app.get('/8708', handler8708)
app.listen(3000, () => {})
        