
const express = require('express')
import {handler2608} from "./handler2608";
const app = express()
app.get('/2608', handler2608)
app.listen(3000, () => {})
        