
const express = require('express')
import {handler2958} from "./handler2958";
const app = express()
app.get('/2958', handler2958)
app.listen(3000, () => {})
        