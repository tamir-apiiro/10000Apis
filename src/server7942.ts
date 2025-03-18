
const express = require('express')
import {handler7942} from "./handler7942";
const app = express()
app.get('/7942', handler7942)
app.listen(3000, () => {})
        