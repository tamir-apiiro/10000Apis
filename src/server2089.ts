
const express = require('express')
import {handler2089} from "./handler2089";
const app = express()
app.get('/2089', handler2089)
app.listen(3000, () => {})
        