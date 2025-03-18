
const express = require('express')
import {handler2876} from "./handler2876";
const app = express()
app.get('/2876', handler2876)
app.listen(3000, () => {})
        