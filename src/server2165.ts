
const express = require('express')
import {handler2165} from "./handler2165";
const app = express()
app.get('/2165', handler2165)
app.listen(3000, () => {})
        