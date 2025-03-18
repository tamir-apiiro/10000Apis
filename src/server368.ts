
const express = require('express')
import {handler368} from "./handler368";
const app = express()
app.get('/368', handler368)
app.listen(3000, () => {})
        