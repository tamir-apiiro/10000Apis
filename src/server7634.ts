
const express = require('express')
import {handler7634} from "./handler7634";
const app = express()
app.get('/7634', handler7634)
app.listen(3000, () => {})
        