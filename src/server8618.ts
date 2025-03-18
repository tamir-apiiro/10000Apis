
const express = require('express')
import {handler8618} from "./handler8618";
const app = express()
app.get('/8618', handler8618)
app.listen(3000, () => {})
        