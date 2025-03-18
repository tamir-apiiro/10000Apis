
const express = require('express')
import {handler2286} from "./handler2286";
const app = express()
app.get('/2286', handler2286)
app.listen(3000, () => {})
        