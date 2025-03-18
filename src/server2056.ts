
const express = require('express')
import {handler2056} from "./handler2056";
const app = express()
app.get('/2056', handler2056)
app.listen(3000, () => {})
        