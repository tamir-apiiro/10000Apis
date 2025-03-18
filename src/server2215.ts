
const express = require('express')
import {handler2215} from "./handler2215";
const app = express()
app.get('/2215', handler2215)
app.listen(3000, () => {})
        