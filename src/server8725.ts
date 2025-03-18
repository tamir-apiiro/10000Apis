
const express = require('express')
import {handler8725} from "./handler8725";
const app = express()
app.get('/8725', handler8725)
app.listen(3000, () => {})
        