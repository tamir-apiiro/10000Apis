
const express = require('express')
import {handler3064} from "./handler3064";
const app = express()
app.get('/3064', handler3064)
app.listen(3000, () => {})
        