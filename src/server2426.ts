
const express = require('express')
import {handler2426} from "./handler2426";
const app = express()
app.get('/2426', handler2426)
app.listen(3000, () => {})
        