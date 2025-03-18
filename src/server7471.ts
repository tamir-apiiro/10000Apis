
const express = require('express')
import {handler7471} from "./handler7471";
const app = express()
app.get('/7471', handler7471)
app.listen(3000, () => {})
        