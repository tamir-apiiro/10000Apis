
const express = require('express')
import {handler8764} from "./handler8764";
const app = express()
app.get('/8764', handler8764)
app.listen(3000, () => {})
        