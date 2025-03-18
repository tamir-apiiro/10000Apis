
const express = require('express')
import {handler2336} from "./handler2336";
const app = express()
app.get('/2336', handler2336)
app.listen(3000, () => {})
        