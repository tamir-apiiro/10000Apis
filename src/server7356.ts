
const express = require('express')
import {handler7356} from "./handler7356";
const app = express()
app.get('/7356', handler7356)
app.listen(3000, () => {})
        