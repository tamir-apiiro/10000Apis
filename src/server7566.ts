
const express = require('express')
import {handler7566} from "./handler7566";
const app = express()
app.get('/7566', handler7566)
app.listen(3000, () => {})
        