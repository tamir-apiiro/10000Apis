
const express = require('express')
import {handler7688} from "./handler7688";
const app = express()
app.get('/7688', handler7688)
app.listen(3000, () => {})
        