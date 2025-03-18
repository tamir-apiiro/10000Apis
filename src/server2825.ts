
const express = require('express')
import {handler2825} from "./handler2825";
const app = express()
app.get('/2825', handler2825)
app.listen(3000, () => {})
        