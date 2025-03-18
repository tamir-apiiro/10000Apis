
const express = require('express')
import {handler2872} from "./handler2872";
const app = express()
app.get('/2872', handler2872)
app.listen(3000, () => {})
        