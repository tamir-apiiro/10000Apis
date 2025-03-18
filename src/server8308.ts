
const express = require('express')
import {handler8308} from "./handler8308";
const app = express()
app.get('/8308', handler8308)
app.listen(3000, () => {})
        