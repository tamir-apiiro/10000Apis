
const express = require('express')
import {handler2894} from "./handler2894";
const app = express()
app.get('/2894', handler2894)
app.listen(3000, () => {})
        