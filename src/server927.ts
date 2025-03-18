
const express = require('express')
import {handler927} from "./handler927";
const app = express()
app.get('/927', handler927)
app.listen(3000, () => {})
        