
const express = require('express')
import {handler2244} from "./handler2244";
const app = express()
app.get('/2244', handler2244)
app.listen(3000, () => {})
        