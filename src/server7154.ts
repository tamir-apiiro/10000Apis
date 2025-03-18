
const express = require('express')
import {handler7154} from "./handler7154";
const app = express()
app.get('/7154', handler7154)
app.listen(3000, () => {})
        