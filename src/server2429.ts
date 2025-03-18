
const express = require('express')
import {handler2429} from "./handler2429";
const app = express()
app.get('/2429', handler2429)
app.listen(3000, () => {})
        