
const express = require('express')
import {handler7618} from "./handler7618";
const app = express()
app.get('/7618', handler7618)
app.listen(3000, () => {})
        