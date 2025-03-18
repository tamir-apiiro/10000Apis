
const express = require('express')
import {handler2821} from "./handler2821";
const app = express()
app.get('/2821', handler2821)
app.listen(3000, () => {})
        