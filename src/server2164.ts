
const express = require('express')
import {handler2164} from "./handler2164";
const app = express()
app.get('/2164', handler2164)
app.listen(3000, () => {})
        