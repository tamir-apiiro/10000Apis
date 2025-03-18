
const express = require('express')
import {handler1065} from "./handler1065";
const app = express()
app.get('/1065', handler1065)
app.listen(3000, () => {})
        