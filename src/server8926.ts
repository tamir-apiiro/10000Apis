
const express = require('express')
import {handler8926} from "./handler8926";
const app = express()
app.get('/8926', handler8926)
app.listen(3000, () => {})
        