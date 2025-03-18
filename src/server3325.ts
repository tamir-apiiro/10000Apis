
const express = require('express')
import {handler3325} from "./handler3325";
const app = express()
app.get('/3325', handler3325)
app.listen(3000, () => {})
        