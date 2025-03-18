
const express = require('express')
import {handler2916} from "./handler2916";
const app = express()
app.get('/2916', handler2916)
app.listen(3000, () => {})
        