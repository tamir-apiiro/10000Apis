
const express = require('express')
import {handler8155} from "./handler8155";
const app = express()
app.get('/8155', handler8155)
app.listen(3000, () => {})
        