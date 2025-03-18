
const express = require('express')
import {handler8551} from "./handler8551";
const app = express()
app.get('/8551', handler8551)
app.listen(3000, () => {})
        