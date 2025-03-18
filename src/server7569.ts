
const express = require('express')
import {handler7569} from "./handler7569";
const app = express()
app.get('/7569', handler7569)
app.listen(3000, () => {})
        