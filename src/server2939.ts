
const express = require('express')
import {handler2939} from "./handler2939";
const app = express()
app.get('/2939', handler2939)
app.listen(3000, () => {})
        