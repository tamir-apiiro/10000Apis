
const express = require('express')
import {handler2378} from "./handler2378";
const app = express()
app.get('/2378', handler2378)
app.listen(3000, () => {})
        