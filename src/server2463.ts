
const express = require('express')
import {handler2463} from "./handler2463";
const app = express()
app.get('/2463', handler2463)
app.listen(3000, () => {})
        