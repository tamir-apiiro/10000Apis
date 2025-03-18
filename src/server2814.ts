
const express = require('express')
import {handler2814} from "./handler2814";
const app = express()
app.get('/2814', handler2814)
app.listen(3000, () => {})
        