
const express = require('express')
import {handler8742} from "./handler8742";
const app = express()
app.get('/8742', handler8742)
app.listen(3000, () => {})
        