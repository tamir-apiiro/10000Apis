
const express = require('express')
import {handler2093} from "./handler2093";
const app = express()
app.get('/2093', handler2093)
app.listen(3000, () => {})
        