
const express = require('express')
import {handler457} from "./handler457";
const app = express()
app.get('/457', handler457)
app.listen(3000, () => {})
        