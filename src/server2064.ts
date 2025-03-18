
const express = require('express')
import {handler2064} from "./handler2064";
const app = express()
app.get('/2064', handler2064)
app.listen(3000, () => {})
        