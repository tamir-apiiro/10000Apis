
const express = require('express')
import {handler1664} from "./handler1664";
const app = express()
app.get('/1664', handler1664)
app.listen(3000, () => {})
        