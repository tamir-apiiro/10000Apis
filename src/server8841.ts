
const express = require('express')
import {handler8841} from "./handler8841";
const app = express()
app.get('/8841', handler8841)
app.listen(3000, () => {})
        