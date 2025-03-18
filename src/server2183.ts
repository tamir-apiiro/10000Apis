
const express = require('express')
import {handler2183} from "./handler2183";
const app = express()
app.get('/2183', handler2183)
app.listen(3000, () => {})
        