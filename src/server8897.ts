
const express = require('express')
import {handler8897} from "./handler8897";
const app = express()
app.get('/8897', handler8897)
app.listen(3000, () => {})
        