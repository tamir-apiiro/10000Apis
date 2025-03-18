
const express = require('express')
import {handler1929} from "./handler1929";
const app = express()
app.get('/1929', handler1929)
app.listen(3000, () => {})
        