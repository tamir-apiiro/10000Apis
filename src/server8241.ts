
const express = require('express')
import {handler8241} from "./handler8241";
const app = express()
app.get('/8241', handler8241)
app.listen(3000, () => {})
        