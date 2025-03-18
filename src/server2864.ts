
const express = require('express')
import {handler2864} from "./handler2864";
const app = express()
app.get('/2864', handler2864)
app.listen(3000, () => {})
        