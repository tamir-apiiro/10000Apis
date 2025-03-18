
const express = require('express')
import {handler2518} from "./handler2518";
const app = express()
app.get('/2518', handler2518)
app.listen(3000, () => {})
        