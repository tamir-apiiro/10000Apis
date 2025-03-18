
const express = require('express')
import {handler2404} from "./handler2404";
const app = express()
app.get('/2404', handler2404)
app.listen(3000, () => {})
        