
const express = require('express')
import {handler6301} from "./handler6301";
const app = express()
app.get('/6301', handler6301)
app.listen(3000, () => {})
        