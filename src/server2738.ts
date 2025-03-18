
const express = require('express')
import {handler2738} from "./handler2738";
const app = express()
app.get('/2738', handler2738)
app.listen(3000, () => {})
        