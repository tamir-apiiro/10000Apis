
const express = require('express')
import {handler7920} from "./handler7920";
const app = express()
app.get('/7920', handler7920)
app.listen(3000, () => {})
        