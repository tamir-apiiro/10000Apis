
const express = require('express')
import {handler8522} from "./handler8522";
const app = express()
app.get('/8522', handler8522)
app.listen(3000, () => {})
        