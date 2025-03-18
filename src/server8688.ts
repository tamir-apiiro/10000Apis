
const express = require('express')
import {handler8688} from "./handler8688";
const app = express()
app.get('/8688', handler8688)
app.listen(3000, () => {})
        