
const express = require('express')
import {handler8111} from "./handler8111";
const app = express()
app.get('/8111', handler8111)
app.listen(3000, () => {})
        