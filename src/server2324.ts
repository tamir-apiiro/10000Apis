
const express = require('express')
import {handler2324} from "./handler2324";
const app = express()
app.get('/2324', handler2324)
app.listen(3000, () => {})
        