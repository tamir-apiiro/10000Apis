
const express = require('express')
import {handler7469} from "./handler7469";
const app = express()
app.get('/7469', handler7469)
app.listen(3000, () => {})
        