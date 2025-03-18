
const express = require('express')
import {handler2145} from "./handler2145";
const app = express()
app.get('/2145', handler2145)
app.listen(3000, () => {})
        