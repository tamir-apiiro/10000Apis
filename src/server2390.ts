
const express = require('express')
import {handler2390} from "./handler2390";
const app = express()
app.get('/2390', handler2390)
app.listen(3000, () => {})
        