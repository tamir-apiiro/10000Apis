
const express = require('express')
import {handler2849} from "./handler2849";
const app = express()
app.get('/2849', handler2849)
app.listen(3000, () => {})
        