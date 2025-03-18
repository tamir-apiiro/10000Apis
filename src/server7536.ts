
const express = require('express')
import {handler7536} from "./handler7536";
const app = express()
app.get('/7536', handler7536)
app.listen(3000, () => {})
        