
const express = require('express')
import {handler8963} from "./handler8963";
const app = express()
app.get('/8963', handler8963)
app.listen(3000, () => {})
        