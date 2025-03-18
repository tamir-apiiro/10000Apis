
const express = require('express')
import {handler2768} from "./handler2768";
const app = express()
app.get('/2768', handler2768)
app.listen(3000, () => {})
        