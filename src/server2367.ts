
const express = require('express')
import {handler2367} from "./handler2367";
const app = express()
app.get('/2367', handler2367)
app.listen(3000, () => {})
        