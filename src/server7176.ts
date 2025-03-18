
const express = require('express')
import {handler7176} from "./handler7176";
const app = express()
app.get('/7176', handler7176)
app.listen(3000, () => {})
        