
const express = require('express')
import {handler8252} from "./handler8252";
const app = express()
app.get('/8252', handler8252)
app.listen(3000, () => {})
        