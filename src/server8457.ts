
const express = require('express')
import {handler8457} from "./handler8457";
const app = express()
app.get('/8457', handler8457)
app.listen(3000, () => {})
        