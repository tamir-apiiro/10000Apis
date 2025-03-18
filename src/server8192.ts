
const express = require('express')
import {handler8192} from "./handler8192";
const app = express()
app.get('/8192', handler8192)
app.listen(3000, () => {})
        