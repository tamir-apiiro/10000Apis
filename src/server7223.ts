
const express = require('express')
import {handler7223} from "./handler7223";
const app = express()
app.get('/7223', handler7223)
app.listen(3000, () => {})
        