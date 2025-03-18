
const express = require('express')
import {handler2048} from "./handler2048";
const app = express()
app.get('/2048', handler2048)
app.listen(3000, () => {})
        