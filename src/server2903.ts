
const express = require('express')
import {handler2903} from "./handler2903";
const app = express()
app.get('/2903', handler2903)
app.listen(3000, () => {})
        