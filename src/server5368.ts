
const express = require('express')
import {handler5368} from "./handler5368";
const app = express()
app.get('/5368', handler5368)
app.listen(3000, () => {})
        