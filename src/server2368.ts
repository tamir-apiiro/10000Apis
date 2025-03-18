
const express = require('express')
import {handler2368} from "./handler2368";
const app = express()
app.get('/2368', handler2368)
app.listen(3000, () => {})
        