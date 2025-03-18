
const express = require('express')
import {handler8289} from "./handler8289";
const app = express()
app.get('/8289', handler8289)
app.listen(3000, () => {})
        