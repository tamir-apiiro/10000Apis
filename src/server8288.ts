
const express = require('express')
import {handler8288} from "./handler8288";
const app = express()
app.get('/8288', handler8288)
app.listen(3000, () => {})
        