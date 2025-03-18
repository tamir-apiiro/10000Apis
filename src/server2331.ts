
const express = require('express')
import {handler2331} from "./handler2331";
const app = express()
app.get('/2331', handler2331)
app.listen(3000, () => {})
        