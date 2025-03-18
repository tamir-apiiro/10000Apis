
const express = require('express')
import {handler2148} from "./handler2148";
const app = express()
app.get('/2148', handler2148)
app.listen(3000, () => {})
        