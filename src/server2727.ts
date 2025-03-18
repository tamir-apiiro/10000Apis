
const express = require('express')
import {handler2727} from "./handler2727";
const app = express()
app.get('/2727', handler2727)
app.listen(3000, () => {})
        