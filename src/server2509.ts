
const express = require('express')
import {handler2509} from "./handler2509";
const app = express()
app.get('/2509', handler2509)
app.listen(3000, () => {})
        