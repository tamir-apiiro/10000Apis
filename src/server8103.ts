
const express = require('express')
import {handler8103} from "./handler8103";
const app = express()
app.get('/8103', handler8103)
app.listen(3000, () => {})
        