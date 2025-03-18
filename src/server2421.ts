
const express = require('express')
import {handler2421} from "./handler2421";
const app = express()
app.get('/2421', handler2421)
app.listen(3000, () => {})
        