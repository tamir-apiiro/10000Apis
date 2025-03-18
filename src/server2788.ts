
const express = require('express')
import {handler2788} from "./handler2788";
const app = express()
app.get('/2788', handler2788)
app.listen(3000, () => {})
        