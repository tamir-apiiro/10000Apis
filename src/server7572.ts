
const express = require('express')
import {handler7572} from "./handler7572";
const app = express()
app.get('/7572', handler7572)
app.listen(3000, () => {})
        