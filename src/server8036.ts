
const express = require('express')
import {handler8036} from "./handler8036";
const app = express()
app.get('/8036', handler8036)
app.listen(3000, () => {})
        