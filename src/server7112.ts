
const express = require('express')
import {handler7112} from "./handler7112";
const app = express()
app.get('/7112', handler7112)
app.listen(3000, () => {})
        