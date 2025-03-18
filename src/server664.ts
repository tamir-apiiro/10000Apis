
const express = require('express')
import {handler664} from "./handler664";
const app = express()
app.get('/664', handler664)
app.listen(3000, () => {})
        