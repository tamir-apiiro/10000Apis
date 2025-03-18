
const express = require('express')
import {handler2328} from "./handler2328";
const app = express()
app.get('/2328', handler2328)
app.listen(3000, () => {})
        