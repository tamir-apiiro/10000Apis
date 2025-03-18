
const express = require('express')
import {handler8258} from "./handler8258";
const app = express()
app.get('/8258', handler8258)
app.listen(3000, () => {})
        