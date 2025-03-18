
const express = require('express')
import {handler8757} from "./handler8757";
const app = express()
app.get('/8757', handler8757)
app.listen(3000, () => {})
        