
const express = require('express')
import {handler2797} from "./handler2797";
const app = express()
app.get('/2797', handler2797)
app.listen(3000, () => {})
        