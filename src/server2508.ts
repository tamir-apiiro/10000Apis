
const express = require('express')
import {handler2508} from "./handler2508";
const app = express()
app.get('/2508', handler2508)
app.listen(3000, () => {})
        