
const express = require('express')
import {handler573} from "./handler573";
const app = express()
app.get('/573', handler573)
app.listen(3000, () => {})
        