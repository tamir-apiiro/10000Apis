
const express = require('express')
import {handler2505} from "./handler2505";
const app = express()
app.get('/2505', handler2505)
app.listen(3000, () => {})
        