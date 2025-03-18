
const express = require('express')
import {handler2609} from "./handler2609";
const app = express()
app.get('/2609', handler2609)
app.listen(3000, () => {})
        