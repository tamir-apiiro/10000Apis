
const express = require('express')
import {handler2461} from "./handler2461";
const app = express()
app.get('/2461', handler2461)
app.listen(3000, () => {})
        