
const express = require('express')
import {handler8020} from "./handler8020";
const app = express()
app.get('/8020', handler8020)
app.listen(3000, () => {})
        