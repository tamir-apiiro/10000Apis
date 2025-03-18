
const express = require('express')
import {handler2086} from "./handler2086";
const app = express()
app.get('/2086', handler2086)
app.listen(3000, () => {})
        