
const express = require('express')
import {handler2604} from "./handler2604";
const app = express()
app.get('/2604', handler2604)
app.listen(3000, () => {})
        