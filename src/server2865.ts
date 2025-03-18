
const express = require('express')
import {handler2865} from "./handler2865";
const app = express()
app.get('/2865', handler2865)
app.listen(3000, () => {})
        