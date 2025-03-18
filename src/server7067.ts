
const express = require('express')
import {handler7067} from "./handler7067";
const app = express()
app.get('/7067', handler7067)
app.listen(3000, () => {})
        