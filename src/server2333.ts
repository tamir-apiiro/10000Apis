
const express = require('express')
import {handler2333} from "./handler2333";
const app = express()
app.get('/2333', handler2333)
app.listen(3000, () => {})
        