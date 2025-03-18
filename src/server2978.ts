
const express = require('express')
import {handler2978} from "./handler2978";
const app = express()
app.get('/2978', handler2978)
app.listen(3000, () => {})
        