
const express = require('express')
import {handler2807} from "./handler2807";
const app = express()
app.get('/2807', handler2807)
app.listen(3000, () => {})
        