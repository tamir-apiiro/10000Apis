
const express = require('express')
import {handler7290} from "./handler7290";
const app = express()
app.get('/7290', handler7290)
app.listen(3000, () => {})
        