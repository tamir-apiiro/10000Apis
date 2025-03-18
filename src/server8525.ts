
const express = require('express')
import {handler8525} from "./handler8525";
const app = express()
app.get('/8525', handler8525)
app.listen(3000, () => {})
        