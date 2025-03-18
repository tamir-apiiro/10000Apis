
const express = require('express')
import {handler2558} from "./handler2558";
const app = express()
app.get('/2558', handler2558)
app.listen(3000, () => {})
        