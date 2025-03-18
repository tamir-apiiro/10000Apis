
const express = require('express')
import {handler2746} from "./handler2746";
const app = express()
app.get('/2746', handler2746)
app.listen(3000, () => {})
        