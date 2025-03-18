
const express = require('express')
import {handler7897} from "./handler7897";
const app = express()
app.get('/7897', handler7897)
app.listen(3000, () => {})
        