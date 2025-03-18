
const express = require('express')
import {handler2868} from "./handler2868";
const app = express()
app.get('/2868', handler2868)
app.listen(3000, () => {})
        