
const express = require('express')
import {handler2469} from "./handler2469";
const app = express()
app.get('/2469', handler2469)
app.listen(3000, () => {})
        