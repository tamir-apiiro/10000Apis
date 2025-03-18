
const express = require('express')
import {handler2510} from "./handler2510";
const app = express()
app.get('/2510', handler2510)
app.listen(3000, () => {})
        