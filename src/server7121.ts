
const express = require('express')
import {handler7121} from "./handler7121";
const app = express()
app.get('/7121', handler7121)
app.listen(3000, () => {})
        