
const express = require('express')
import {handler2424} from "./handler2424";
const app = express()
app.get('/2424', handler2424)
app.listen(3000, () => {})
        