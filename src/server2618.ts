
const express = require('express')
import {handler2618} from "./handler2618";
const app = express()
app.get('/2618', handler2618)
app.listen(3000, () => {})
        