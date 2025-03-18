
const express = require('express')
import {handler8752} from "./handler8752";
const app = express()
app.get('/8752', handler8752)
app.listen(3000, () => {})
        