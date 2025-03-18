
const express = require('express')
import {handler2383} from "./handler2383";
const app = express()
app.get('/2383', handler2383)
app.listen(3000, () => {})
        