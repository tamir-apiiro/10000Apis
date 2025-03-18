
const express = require('express')
import {handler7098} from "./handler7098";
const app = express()
app.get('/7098', handler7098)
app.listen(3000, () => {})
        