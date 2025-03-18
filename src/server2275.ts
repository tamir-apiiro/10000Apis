
const express = require('express')
import {handler2275} from "./handler2275";
const app = express()
app.get('/2275', handler2275)
app.listen(3000, () => {})
        