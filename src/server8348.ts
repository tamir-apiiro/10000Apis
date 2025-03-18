
const express = require('express')
import {handler8348} from "./handler8348";
const app = express()
app.get('/8348', handler8348)
app.listen(3000, () => {})
        