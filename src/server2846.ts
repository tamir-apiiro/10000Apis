
const express = require('express')
import {handler2846} from "./handler2846";
const app = express()
app.get('/2846', handler2846)
app.listen(3000, () => {})
        