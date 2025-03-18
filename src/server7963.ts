
const express = require('express')
import {handler7963} from "./handler7963";
const app = express()
app.get('/7963', handler7963)
app.listen(3000, () => {})
        