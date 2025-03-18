
const express = require('express')
import {handler7362} from "./handler7362";
const app = express()
app.get('/7362', handler7362)
app.listen(3000, () => {})
        