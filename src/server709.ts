
const express = require('express')
import {handler709} from "./handler709";
const app = express()
app.get('/709', handler709)
app.listen(3000, () => {})
        