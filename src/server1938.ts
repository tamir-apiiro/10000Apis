
const express = require('express')
import {handler1938} from "./handler1938";
const app = express()
app.get('/1938', handler1938)
app.listen(3000, () => {})
        