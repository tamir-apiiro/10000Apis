
const express = require('express')
import {handler2670} from "./handler2670";
const app = express()
app.get('/2670', handler2670)
app.listen(3000, () => {})
        