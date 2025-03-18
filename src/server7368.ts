
const express = require('express')
import {handler7368} from "./handler7368";
const app = express()
app.get('/7368', handler7368)
app.listen(3000, () => {})
        