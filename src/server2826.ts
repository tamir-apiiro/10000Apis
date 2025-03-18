
const express = require('express')
import {handler2826} from "./handler2826";
const app = express()
app.get('/2826', handler2826)
app.listen(3000, () => {})
        