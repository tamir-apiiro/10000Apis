
const express = require('express')
import {handler7075} from "./handler7075";
const app = express()
app.get('/7075', handler7075)
app.listen(3000, () => {})
        