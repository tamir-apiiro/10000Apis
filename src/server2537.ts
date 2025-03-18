
const express = require('express')
import {handler2537} from "./handler2537";
const app = express()
app.get('/2537', handler2537)
app.listen(3000, () => {})
        