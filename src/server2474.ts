
const express = require('express')
import {handler2474} from "./handler2474";
const app = express()
app.get('/2474', handler2474)
app.listen(3000, () => {})
        