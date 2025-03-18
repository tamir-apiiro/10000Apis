
const express = require('express')
import {handler1241} from "./handler1241";
const app = express()
app.get('/1241', handler1241)
app.listen(3000, () => {})
        