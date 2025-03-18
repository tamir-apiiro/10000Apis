
const express = require('express')
import {handler1028} from "./handler1028";
const app = express()
app.get('/1028', handler1028)
app.listen(3000, () => {})
        