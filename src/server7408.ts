
const express = require('express')
import {handler7408} from "./handler7408";
const app = express()
app.get('/7408', handler7408)
app.listen(3000, () => {})
        