
const express = require('express')
import {handler2775} from "./handler2775";
const app = express()
app.get('/2775', handler2775)
app.listen(3000, () => {})
        