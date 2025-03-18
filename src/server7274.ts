
const express = require('express')
import {handler7274} from "./handler7274";
const app = express()
app.get('/7274', handler7274)
app.listen(3000, () => {})
        