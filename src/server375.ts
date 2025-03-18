
const express = require('express')
import {handler375} from "./handler375";
const app = express()
app.get('/375', handler375)
app.listen(3000, () => {})
        