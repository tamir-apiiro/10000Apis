
const express = require('express')
import {handler8343} from "./handler8343";
const app = express()
app.get('/8343', handler8343)
app.listen(3000, () => {})
        