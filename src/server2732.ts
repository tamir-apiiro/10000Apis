
const express = require('express')
import {handler2732} from "./handler2732";
const app = express()
app.get('/2732', handler2732)
app.listen(3000, () => {})
        