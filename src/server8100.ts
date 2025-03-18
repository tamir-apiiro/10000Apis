
const express = require('express')
import {handler8100} from "./handler8100";
const app = express()
app.get('/8100', handler8100)
app.listen(3000, () => {})
        