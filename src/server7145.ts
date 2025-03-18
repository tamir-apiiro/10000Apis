
const express = require('express')
import {handler7145} from "./handler7145";
const app = express()
app.get('/7145', handler7145)
app.listen(3000, () => {})
        