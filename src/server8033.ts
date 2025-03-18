
const express = require('express')
import {handler8033} from "./handler8033";
const app = express()
app.get('/8033', handler8033)
app.listen(3000, () => {})
        