
const express = require('express')
import {handler7527} from "./handler7527";
const app = express()
app.get('/7527', handler7527)
app.listen(3000, () => {})
        