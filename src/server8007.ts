
const express = require('express')
import {handler8007} from "./handler8007";
const app = express()
app.get('/8007', handler8007)
app.listen(3000, () => {})
        