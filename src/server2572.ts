
const express = require('express')
import {handler2572} from "./handler2572";
const app = express()
app.get('/2572', handler2572)
app.listen(3000, () => {})
        