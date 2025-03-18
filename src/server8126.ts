
const express = require('express')
import {handler8126} from "./handler8126";
const app = express()
app.get('/8126', handler8126)
app.listen(3000, () => {})
        