
const express = require('express')
import {handler2283} from "./handler2283";
const app = express()
app.get('/2283', handler2283)
app.listen(3000, () => {})
        