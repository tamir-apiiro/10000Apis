
const express = require('express')
import {handler8543} from "./handler8543";
const app = express()
app.get('/8543', handler8543)
app.listen(3000, () => {})
        