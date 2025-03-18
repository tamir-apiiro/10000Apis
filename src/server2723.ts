
const express = require('express')
import {handler2723} from "./handler2723";
const app = express()
app.get('/2723', handler2723)
app.listen(3000, () => {})
        