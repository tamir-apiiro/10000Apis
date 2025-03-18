
const express = require('express')
import {handler8484} from "./handler8484";
const app = express()
app.get('/8484', handler8484)
app.listen(3000, () => {})
        