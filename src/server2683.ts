
const express = require('express')
import {handler2683} from "./handler2683";
const app = express()
app.get('/2683', handler2683)
app.listen(3000, () => {})
        