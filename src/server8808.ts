
const express = require('express')
import {handler8808} from "./handler8808";
const app = express()
app.get('/8808', handler8808)
app.listen(3000, () => {})
        