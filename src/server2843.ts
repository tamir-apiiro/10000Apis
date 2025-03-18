
const express = require('express')
import {handler2843} from "./handler2843";
const app = express()
app.get('/2843', handler2843)
app.listen(3000, () => {})
        