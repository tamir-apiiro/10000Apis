
const express = require('express')
import {handler2728} from "./handler2728";
const app = express()
app.get('/2728', handler2728)
app.listen(3000, () => {})
        