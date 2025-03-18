
const express = require('express')
import {handler7424} from "./handler7424";
const app = express()
app.get('/7424', handler7424)
app.listen(3000, () => {})
        