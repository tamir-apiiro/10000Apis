
const express = require('express')
import {handler2098} from "./handler2098";
const app = express()
app.get('/2098', handler2098)
app.listen(3000, () => {})
        