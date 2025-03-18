
const express = require('express')
import {handler2187} from "./handler2187";
const app = express()
app.get('/2187', handler2187)
app.listen(3000, () => {})
        