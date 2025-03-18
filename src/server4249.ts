
const express = require('express')
import {handler4249} from "./handler4249";
const app = express()
app.get('/4249', handler4249)
app.listen(3000, () => {})
        