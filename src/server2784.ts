
const express = require('express')
import {handler2784} from "./handler2784";
const app = express()
app.get('/2784', handler2784)
app.listen(3000, () => {})
        