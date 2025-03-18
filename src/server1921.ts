
const express = require('express')
import {handler1921} from "./handler1921";
const app = express()
app.get('/1921', handler1921)
app.listen(3000, () => {})
        