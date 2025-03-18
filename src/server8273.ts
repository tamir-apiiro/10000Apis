
const express = require('express')
import {handler8273} from "./handler8273";
const app = express()
app.get('/8273', handler8273)
app.listen(3000, () => {})
        