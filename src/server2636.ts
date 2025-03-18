
const express = require('express')
import {handler2636} from "./handler2636";
const app = express()
app.get('/2636', handler2636)
app.listen(3000, () => {})
        