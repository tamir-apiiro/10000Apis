
const express = require('express')
import {handler7036} from "./handler7036";
const app = express()
app.get('/7036', handler7036)
app.listen(3000, () => {})
        