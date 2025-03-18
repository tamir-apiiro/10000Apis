
const express = require('express')
import {handler8380} from "./handler8380";
const app = express()
app.get('/8380', handler8380)
app.listen(3000, () => {})
        