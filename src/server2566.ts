
const express = require('express')
import {handler2566} from "./handler2566";
const app = express()
app.get('/2566', handler2566)
app.listen(3000, () => {})
        