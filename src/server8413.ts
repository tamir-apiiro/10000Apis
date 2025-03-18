
const express = require('express')
import {handler8413} from "./handler8413";
const app = express()
app.get('/8413', handler8413)
app.listen(3000, () => {})
        