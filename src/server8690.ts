
const express = require('express')
import {handler8690} from "./handler8690";
const app = express()
app.get('/8690', handler8690)
app.listen(3000, () => {})
        