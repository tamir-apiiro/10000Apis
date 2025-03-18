
const express = require('express')
import {handler2998} from "./handler2998";
const app = express()
app.get('/2998', handler2998)
app.listen(3000, () => {})
        