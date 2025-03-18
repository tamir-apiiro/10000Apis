
const express = require('express')
import {handler2396} from "./handler2396";
const app = express()
app.get('/2396', handler2396)
app.listen(3000, () => {})
        