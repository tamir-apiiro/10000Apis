
const express = require('express')
import {handler2067} from "./handler2067";
const app = express()
app.get('/2067', handler2067)
app.listen(3000, () => {})
        