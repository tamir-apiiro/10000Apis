
const express = require('express')
import {handler2099} from "./handler2099";
const app = express()
app.get('/2099', handler2099)
app.listen(3000, () => {})
        