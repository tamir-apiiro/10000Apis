
const express = require('express')
import {handler7029} from "./handler7029";
const app = express()
app.get('/7029', handler7029)
app.listen(3000, () => {})
        