
const express = require('express')
import {handler8842} from "./handler8842";
const app = express()
app.get('/8842', handler8842)
app.listen(3000, () => {})
        