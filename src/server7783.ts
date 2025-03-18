
const express = require('express')
import {handler7783} from "./handler7783";
const app = express()
app.get('/7783', handler7783)
app.listen(3000, () => {})
        