
const express = require('express')
import {handler8486} from "./handler8486";
const app = express()
app.get('/8486', handler8486)
app.listen(3000, () => {})
        