
const express = require('express')
import {handler2730} from "./handler2730";
const app = express()
app.get('/2730', handler2730)
app.listen(3000, () => {})
        