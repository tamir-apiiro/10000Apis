
const express = require('express')
import {handler7764} from "./handler7764";
const app = express()
app.get('/7764', handler7764)
app.listen(3000, () => {})
        