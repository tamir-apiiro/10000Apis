
const express = require('express')
import {handler2601} from "./handler2601";
const app = express()
app.get('/2601', handler2601)
app.listen(3000, () => {})
        