
const express = require('express')
import {handler8728} from "./handler8728";
const app = express()
app.get('/8728', handler8728)
app.listen(3000, () => {})
        