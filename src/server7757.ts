
const express = require('express')
import {handler7757} from "./handler7757";
const app = express()
app.get('/7757', handler7757)
app.listen(3000, () => {})
        