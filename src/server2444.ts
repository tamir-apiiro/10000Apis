
const express = require('express')
import {handler2444} from "./handler2444";
const app = express()
app.get('/2444', handler2444)
app.listen(3000, () => {})
        