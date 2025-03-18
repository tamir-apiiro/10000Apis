
const express = require('express')
import {handler8991} from "./handler8991";
const app = express()
app.get('/8991', handler8991)
app.listen(3000, () => {})
        