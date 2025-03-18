
const express = require('express')
import {handler2128} from "./handler2128";
const app = express()
app.get('/2128', handler2128)
app.listen(3000, () => {})
        