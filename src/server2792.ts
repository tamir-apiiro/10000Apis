
const express = require('express')
import {handler2792} from "./handler2792";
const app = express()
app.get('/2792', handler2792)
app.listen(3000, () => {})
        