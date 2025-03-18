
const express = require('express')
import {handler2484} from "./handler2484";
const app = express()
app.get('/2484', handler2484)
app.listen(3000, () => {})
        