
const express = require('express')
import {handler2349} from "./handler2349";
const app = express()
app.get('/2349', handler2349)
app.listen(3000, () => {})
        