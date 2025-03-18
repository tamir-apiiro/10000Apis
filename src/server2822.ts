
const express = require('express')
import {handler2822} from "./handler2822";
const app = express()
app.get('/2822', handler2822)
app.listen(3000, () => {})
        