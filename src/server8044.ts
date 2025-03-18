
const express = require('express')
import {handler8044} from "./handler8044";
const app = express()
app.get('/8044', handler8044)
app.listen(3000, () => {})
        