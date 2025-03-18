
const express = require('express')
import {handler1784} from "./handler1784";
const app = express()
app.get('/1784', handler1784)
app.listen(3000, () => {})
        