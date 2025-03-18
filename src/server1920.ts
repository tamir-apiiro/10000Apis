
const express = require('express')
import {handler1920} from "./handler1920";
const app = express()
app.get('/1920', handler1920)
app.listen(3000, () => {})
        