
const express = require('express')
import {handler3368} from "./handler3368";
const app = express()
app.get('/3368', handler3368)
app.listen(3000, () => {})
        