
const express = require('express')
import {handler2416} from "./handler2416";
const app = express()
app.get('/2416', handler2416)
app.listen(3000, () => {})
        