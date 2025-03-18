
const express = require('express')
import {handler2606} from "./handler2606";
const app = express()
app.get('/2606', handler2606)
app.listen(3000, () => {})
        