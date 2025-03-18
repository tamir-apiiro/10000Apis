
const express = require('express')
import {handler34} from "./handler34";
const app = express()
app.get('/34', handler34)
app.listen(3000, () => {})
        