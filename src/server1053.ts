
const express = require('express')
import {handler1053} from "./handler1053";
const app = express()
app.get('/1053', handler1053)
app.listen(3000, () => {})
        