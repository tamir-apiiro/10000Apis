
const express = require('express')
import {handler2353} from "./handler2353";
const app = express()
app.get('/2353', handler2353)
app.listen(3000, () => {})
        