
const express = require('express')
import {handler8870} from "./handler8870";
const app = express()
app.get('/8870', handler8870)
app.listen(3000, () => {})
        