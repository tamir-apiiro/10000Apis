
const express = require('express')
import {handler8773} from "./handler8773";
const app = express()
app.get('/8773', handler8773)
app.listen(3000, () => {})
        