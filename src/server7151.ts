
const express = require('express')
import {handler7151} from "./handler7151";
const app = express()
app.get('/7151', handler7151)
app.listen(3000, () => {})
        