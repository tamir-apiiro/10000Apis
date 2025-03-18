
const express = require('express')
import {handler2754} from "./handler2754";
const app = express()
app.get('/2754', handler2754)
app.listen(3000, () => {})
        