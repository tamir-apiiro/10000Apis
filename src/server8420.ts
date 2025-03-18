
const express = require('express')
import {handler8420} from "./handler8420";
const app = express()
app.get('/8420', handler8420)
app.listen(3000, () => {})
        