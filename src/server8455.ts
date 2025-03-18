
const express = require('express')
import {handler8455} from "./handler8455";
const app = express()
app.get('/8455', handler8455)
app.listen(3000, () => {})
        