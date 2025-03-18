
const express = require('express')
import {handler2522} from "./handler2522";
const app = express()
app.get('/2522', handler2522)
app.listen(3000, () => {})
        