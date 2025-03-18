
const express = require('express')
import {handler2969} from "./handler2969";
const app = express()
app.get('/2969', handler2969)
app.listen(3000, () => {})
        