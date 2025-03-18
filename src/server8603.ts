
const express = require('express')
import {handler8603} from "./handler8603";
const app = express()
app.get('/8603', handler8603)
app.listen(3000, () => {})
        