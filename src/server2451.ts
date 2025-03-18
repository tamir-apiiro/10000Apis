
const express = require('express')
import {handler2451} from "./handler2451";
const app = express()
app.get('/2451', handler2451)
app.listen(3000, () => {})
        