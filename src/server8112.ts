
const express = require('express')
import {handler8112} from "./handler8112";
const app = express()
app.get('/8112', handler8112)
app.listen(3000, () => {})
        