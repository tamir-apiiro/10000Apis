
const express = require('express')
import {handler8740} from "./handler8740";
const app = express()
app.get('/8740', handler8740)
app.listen(3000, () => {})
        