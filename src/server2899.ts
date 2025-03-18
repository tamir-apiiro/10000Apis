
const express = require('express')
import {handler2899} from "./handler2899";
const app = express()
app.get('/2899', handler2899)
app.listen(3000, () => {})
        