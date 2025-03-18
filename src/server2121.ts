
const express = require('express')
import {handler2121} from "./handler2121";
const app = express()
app.get('/2121', handler2121)
app.listen(3000, () => {})
        