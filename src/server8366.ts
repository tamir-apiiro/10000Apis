
const express = require('express')
import {handler8366} from "./handler8366";
const app = express()
app.get('/8366', handler8366)
app.listen(3000, () => {})
        