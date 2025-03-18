
const express = require('express')
import {handler8674} from "./handler8674";
const app = express()
app.get('/8674', handler8674)
app.listen(3000, () => {})
        