
const express = require('express')
import {handler8912} from "./handler8912";
const app = express()
app.get('/8912', handler8912)
app.listen(3000, () => {})
        