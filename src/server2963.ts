
const express = require('express')
import {handler2963} from "./handler2963";
const app = express()
app.get('/2963', handler2963)
app.listen(3000, () => {})
        