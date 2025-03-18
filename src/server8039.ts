
const express = require('express')
import {handler8039} from "./handler8039";
const app = express()
app.get('/8039', handler8039)
app.listen(3000, () => {})
        