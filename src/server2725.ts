
const express = require('express')
import {handler2725} from "./handler2725";
const app = express()
app.get('/2725', handler2725)
app.listen(3000, () => {})
        