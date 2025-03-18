
const express = require('express')
import {handler7960} from "./handler7960";
const app = express()
app.get('/7960', handler7960)
app.listen(3000, () => {})
        