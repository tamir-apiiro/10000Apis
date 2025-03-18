
const express = require('express')
import {handler7978} from "./handler7978";
const app = express()
app.get('/7978', handler7978)
app.listen(3000, () => {})
        