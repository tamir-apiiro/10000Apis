
const express = require('express')
import {handler2766} from "./handler2766";
const app = express()
app.get('/2766', handler2766)
app.listen(3000, () => {})
        