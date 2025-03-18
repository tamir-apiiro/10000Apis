
const express = require('express')
import {handler8934} from "./handler8934";
const app = express()
app.get('/8934', handler8934)
app.listen(3000, () => {})
        