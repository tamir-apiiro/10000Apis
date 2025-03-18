
const express = require('express')
import {handler1089} from "./handler1089";
const app = express()
app.get('/1089', handler1089)
app.listen(3000, () => {})
        