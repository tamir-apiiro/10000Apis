
const express = require('express')
import {handler2465} from "./handler2465";
const app = express()
app.get('/2465', handler2465)
app.listen(3000, () => {})
        