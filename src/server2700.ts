
const express = require('express')
import {handler2700} from "./handler2700";
const app = express()
app.get('/2700', handler2700)
app.listen(3000, () => {})
        