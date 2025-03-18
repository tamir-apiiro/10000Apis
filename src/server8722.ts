
const express = require('express')
import {handler8722} from "./handler8722";
const app = express()
app.get('/8722', handler8722)
app.listen(3000, () => {})
        