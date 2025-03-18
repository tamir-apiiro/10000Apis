
const express = require('express')
import {handler3897} from "./handler3897";
const app = express()
app.get('/3897', handler3897)
app.listen(3000, () => {})
        