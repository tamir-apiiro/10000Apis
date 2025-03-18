
const express = require('express')
import {handler2955} from "./handler2955";
const app = express()
app.get('/2955', handler2955)
app.listen(3000, () => {})
        