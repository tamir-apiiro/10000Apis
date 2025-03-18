
const express = require('express')
import {handler2867} from "./handler2867";
const app = express()
app.get('/2867', handler2867)
app.listen(3000, () => {})
        