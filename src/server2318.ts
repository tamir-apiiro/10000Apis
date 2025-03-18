
const express = require('express')
import {handler2318} from "./handler2318";
const app = express()
app.get('/2318', handler2318)
app.listen(3000, () => {})
        