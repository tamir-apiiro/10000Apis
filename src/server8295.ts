
const express = require('express')
import {handler8295} from "./handler8295";
const app = express()
app.get('/8295', handler8295)
app.listen(3000, () => {})
        