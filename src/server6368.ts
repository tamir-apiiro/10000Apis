
const express = require('express')
import {handler6368} from "./handler6368";
const app = express()
app.get('/6368', handler6368)
app.listen(3000, () => {})
        