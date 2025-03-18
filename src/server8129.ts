
const express = require('express')
import {handler8129} from "./handler8129";
const app = express()
app.get('/8129', handler8129)
app.listen(3000, () => {})
        