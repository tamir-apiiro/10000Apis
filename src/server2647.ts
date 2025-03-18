
const express = require('express')
import {handler2647} from "./handler2647";
const app = express()
app.get('/2647', handler2647)
app.listen(3000, () => {})
        