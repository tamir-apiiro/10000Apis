
const express = require('express')
import {handler2483} from "./handler2483";
const app = express()
app.get('/2483', handler2483)
app.listen(3000, () => {})
        