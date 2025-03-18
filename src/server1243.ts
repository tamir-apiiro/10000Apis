
const express = require('express')
import {handler1243} from "./handler1243";
const app = express()
app.get('/1243', handler1243)
app.listen(3000, () => {})
        