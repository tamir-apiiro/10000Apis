
const express = require('express')
import {handler7599} from "./handler7599";
const app = express()
app.get('/7599', handler7599)
app.listen(3000, () => {})
        