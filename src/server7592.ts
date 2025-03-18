
const express = require('express')
import {handler7592} from "./handler7592";
const app = express()
app.get('/7592', handler7592)
app.listen(3000, () => {})
        