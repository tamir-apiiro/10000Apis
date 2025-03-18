
const express = require('express')
import {handler2132} from "./handler2132";
const app = express()
app.get('/2132', handler2132)
app.listen(3000, () => {})
        