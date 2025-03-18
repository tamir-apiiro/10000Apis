
const express = require('express')
import {handler8444} from "./handler8444";
const app = express()
app.get('/8444', handler8444)
app.listen(3000, () => {})
        