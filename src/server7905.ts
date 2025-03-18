
const express = require('express')
import {handler7905} from "./handler7905";
const app = express()
app.get('/7905', handler7905)
app.listen(3000, () => {})
        