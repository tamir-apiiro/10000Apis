
const express = require('express')
import {handler2301} from "./handler2301";
const app = express()
app.get('/2301', handler2301)
app.listen(3000, () => {})
        