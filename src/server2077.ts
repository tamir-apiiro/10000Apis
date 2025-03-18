
const express = require('express')
import {handler2077} from "./handler2077";
const app = express()
app.get('/2077', handler2077)
app.listen(3000, () => {})
        