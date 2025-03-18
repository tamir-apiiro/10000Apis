
const express = require('express')
import {handler2178} from "./handler2178";
const app = express()
app.get('/2178', handler2178)
app.listen(3000, () => {})
        