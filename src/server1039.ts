
const express = require('express')
import {handler1039} from "./handler1039";
const app = express()
app.get('/1039', handler1039)
app.listen(3000, () => {})
        