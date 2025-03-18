
const express = require('express')
import {handler2270} from "./handler2270";
const app = express()
app.get('/2270', handler2270)
app.listen(3000, () => {})
        