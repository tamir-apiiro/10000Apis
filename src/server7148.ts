
const express = require('express')
import {handler7148} from "./handler7148";
const app = express()
app.get('/7148', handler7148)
app.listen(3000, () => {})
        