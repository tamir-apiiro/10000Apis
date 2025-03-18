
const express = require('express')
import {handler2209} from "./handler2209";
const app = express()
app.get('/2209', handler2209)
app.listen(3000, () => {})
        