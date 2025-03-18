
const express = require('express')
import {handler8429} from "./handler8429";
const app = express()
app.get('/8429', handler8429)
app.listen(3000, () => {})
        