
const express = require('express')
import {handler2570} from "./handler2570";
const app = express()
app.get('/2570', handler2570)
app.listen(3000, () => {})
        