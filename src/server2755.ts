
const express = require('express')
import {handler2755} from "./handler2755";
const app = express()
app.get('/2755', handler2755)
app.listen(3000, () => {})
        