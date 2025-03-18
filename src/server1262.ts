
const express = require('express')
import {handler1262} from "./handler1262";
const app = express()
app.get('/1262', handler1262)
app.listen(3000, () => {})
        