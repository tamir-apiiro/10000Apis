
const express = require('express')
import {handler2085} from "./handler2085";
const app = express()
app.get('/2085', handler2085)
app.listen(3000, () => {})
        