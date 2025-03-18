
const express = require('express')
import {handler7914} from "./handler7914";
const app = express()
app.get('/7914', handler7914)
app.listen(3000, () => {})
        