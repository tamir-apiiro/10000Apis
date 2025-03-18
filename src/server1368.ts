
const express = require('express')
import {handler1368} from "./handler1368";
const app = express()
app.get('/1368', handler1368)
app.listen(3000, () => {})
        