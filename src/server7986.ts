
const express = require('express')
import {handler7986} from "./handler7986";
const app = express()
app.get('/7986', handler7986)
app.listen(3000, () => {})
        