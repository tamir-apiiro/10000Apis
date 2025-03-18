
const express = require('express')
import {handler8682} from "./handler8682";
const app = express()
app.get('/8682', handler8682)
app.listen(3000, () => {})
        