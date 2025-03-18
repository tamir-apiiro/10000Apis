
const express = require('express')
import {handler2423} from "./handler2423";
const app = express()
app.get('/2423', handler2423)
app.listen(3000, () => {})
        