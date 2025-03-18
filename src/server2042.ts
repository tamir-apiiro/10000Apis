
const express = require('express')
import {handler2042} from "./handler2042";
const app = express()
app.get('/2042', handler2042)
app.listen(3000, () => {})
        