
const express = require('express')
import {handler8064} from "./handler8064";
const app = express()
app.get('/8064', handler8064)
app.listen(3000, () => {})
        