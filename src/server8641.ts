
const express = require('express')
import {handler8641} from "./handler8641";
const app = express()
app.get('/8641', handler8641)
app.listen(3000, () => {})
        