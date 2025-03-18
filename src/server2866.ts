
const express = require('express')
import {handler2866} from "./handler2866";
const app = express()
app.get('/2866', handler2866)
app.listen(3000, () => {})
        