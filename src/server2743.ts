
const express = require('express')
import {handler2743} from "./handler2743";
const app = express()
app.get('/2743', handler2743)
app.listen(3000, () => {})
        