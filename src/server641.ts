
const express = require('express')
import {handler641} from "./handler641";
const app = express()
app.get('/641', handler641)
app.listen(3000, () => {})
        