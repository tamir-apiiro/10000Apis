
const express = require('express')
import {handler2891} from "./handler2891";
const app = express()
app.get('/2891', handler2891)
app.listen(3000, () => {})
        