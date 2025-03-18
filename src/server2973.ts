
const express = require('express')
import {handler2973} from "./handler2973";
const app = express()
app.get('/2973', handler2973)
app.listen(3000, () => {})
        