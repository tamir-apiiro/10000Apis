
const express = require('express')
import {handler7086} from "./handler7086";
const app = express()
app.get('/7086', handler7086)
app.listen(3000, () => {})
        