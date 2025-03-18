
const express = require('express')
import {handler2961} from "./handler2961";
const app = express()
app.get('/2961', handler2961)
app.listen(3000, () => {})
        