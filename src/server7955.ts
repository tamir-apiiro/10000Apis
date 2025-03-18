
const express = require('express')
import {handler7955} from "./handler7955";
const app = express()
app.get('/7955', handler7955)
app.listen(3000, () => {})
        