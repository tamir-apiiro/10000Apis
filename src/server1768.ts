
const express = require('express')
import {handler1768} from "./handler1768";
const app = express()
app.get('/1768', handler1768)
app.listen(3000, () => {})
        