
const express = require('express')
import {handler8416} from "./handler8416";
const app = express()
app.get('/8416', handler8416)
app.listen(3000, () => {})
        