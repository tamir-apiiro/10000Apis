
const express = require('express')
import {handler8122} from "./handler8122";
const app = express()
app.get('/8122', handler8122)
app.listen(3000, () => {})
        