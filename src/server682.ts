
const express = require('express')
import {handler682} from "./handler682";
const app = express()
app.get('/682', handler682)
app.listen(3000, () => {})
        