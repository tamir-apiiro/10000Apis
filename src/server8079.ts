
const express = require('express')
import {handler8079} from "./handler8079";
const app = express()
app.get('/8079', handler8079)
app.listen(3000, () => {})
        