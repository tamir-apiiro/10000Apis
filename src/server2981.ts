
const express = require('express')
import {handler2981} from "./handler2981";
const app = express()
app.get('/2981', handler2981)
app.listen(3000, () => {})
        