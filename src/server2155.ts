
const express = require('express')
import {handler2155} from "./handler2155";
const app = express()
app.get('/2155', handler2155)
app.listen(3000, () => {})
        