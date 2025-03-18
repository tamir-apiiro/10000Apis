
const express = require('express')
import {handler8585} from "./handler8585";
const app = express()
app.get('/8585', handler8585)
app.listen(3000, () => {})
        