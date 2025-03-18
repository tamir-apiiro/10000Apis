
const express = require('express')
import {handler2610} from "./handler2610";
const app = express()
app.get('/2610', handler2610)
app.listen(3000, () => {})
        