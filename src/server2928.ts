
const express = require('express')
import {handler2928} from "./handler2928";
const app = express()
app.get('/2928', handler2928)
app.listen(3000, () => {})
        