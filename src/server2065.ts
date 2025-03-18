
const express = require('express')
import {handler2065} from "./handler2065";
const app = express()
app.get('/2065', handler2065)
app.listen(3000, () => {})
        