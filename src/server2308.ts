
const express = require('express')
import {handler2308} from "./handler2308";
const app = express()
app.get('/2308', handler2308)
app.listen(3000, () => {})
        