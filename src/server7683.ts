
const express = require('express')
import {handler7683} from "./handler7683";
const app = express()
app.get('/7683', handler7683)
app.listen(3000, () => {})
        