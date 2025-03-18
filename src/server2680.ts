
const express = require('express')
import {handler2680} from "./handler2680";
const app = express()
app.get('/2680', handler2680)
app.listen(3000, () => {})
        