
const express = require('express')
import {handler8593} from "./handler8593";
const app = express()
app.get('/8593', handler8593)
app.listen(3000, () => {})
        