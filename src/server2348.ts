
const express = require('express')
import {handler2348} from "./handler2348";
const app = express()
app.get('/2348', handler2348)
app.listen(3000, () => {})
        