
const express = require('express')
import {handler566} from "./handler566";
const app = express()
app.get('/566', handler566)
app.listen(3000, () => {})
        