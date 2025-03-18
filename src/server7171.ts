
const express = require('express')
import {handler7171} from "./handler7171";
const app = express()
app.get('/7171', handler7171)
app.listen(3000, () => {})
        