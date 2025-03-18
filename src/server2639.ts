
const express = require('express')
import {handler2639} from "./handler2639";
const app = express()
app.get('/2639', handler2639)
app.listen(3000, () => {})
        