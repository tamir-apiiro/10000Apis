
const express = require('express')
import {handler8770} from "./handler8770";
const app = express()
app.get('/8770', handler8770)
app.listen(3000, () => {})
        