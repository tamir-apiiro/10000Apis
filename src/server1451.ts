
const express = require('express')
import {handler1451} from "./handler1451";
const app = express()
app.get('/1451', handler1451)
app.listen(3000, () => {})
        