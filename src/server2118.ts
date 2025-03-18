
const express = require('express')
import {handler2118} from "./handler2118";
const app = express()
app.get('/2118', handler2118)
app.listen(3000, () => {})
        