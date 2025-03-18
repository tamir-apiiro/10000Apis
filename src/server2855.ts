
const express = require('express')
import {handler2855} from "./handler2855";
const app = express()
app.get('/2855', handler2855)
app.listen(3000, () => {})
        