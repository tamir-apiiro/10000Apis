
const express = require('express')
import {handler8106} from "./handler8106";
const app = express()
app.get('/8106', handler8106)
app.listen(3000, () => {})
        