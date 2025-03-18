
const express = require('express')
import {handler1110} from "./handler1110";
const app = express()
app.get('/1110', handler1110)
app.listen(3000, () => {})
        