
const express = require('express')
import {handler2841} from "./handler2841";
const app = express()
app.get('/2841', handler2841)
app.listen(3000, () => {})
        