
const express = require('express')
import {handler4368} from "./handler4368";
const app = express()
app.get('/4368', handler4368)
app.listen(3000, () => {})
        