
const express = require('express')
import {handler2765} from "./handler2765";
const app = express()
app.get('/2765', handler2765)
app.listen(3000, () => {})
        