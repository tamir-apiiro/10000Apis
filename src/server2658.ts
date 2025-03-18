
const express = require('express')
import {handler2658} from "./handler2658";
const app = express()
app.get('/2658', handler2658)
app.listen(3000, () => {})
        