
const express = require('express')
import {handler7380} from "./handler7380";
const app = express()
app.get('/7380', handler7380)
app.listen(3000, () => {})
        