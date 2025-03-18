
const express = require('express')
import {handler2856} from "./handler2856";
const app = express()
app.get('/2856', handler2856)
app.listen(3000, () => {})
        