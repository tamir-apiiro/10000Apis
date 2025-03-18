
const express = require('express')
import {handler7404} from "./handler7404";
const app = express()
app.get('/7404', handler7404)
app.listen(3000, () => {})
        