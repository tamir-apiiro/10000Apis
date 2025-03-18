
const express = require('express')
import {handler2072} from "./handler2072";
const app = express()
app.get('/2072', handler2072)
app.listen(3000, () => {})
        