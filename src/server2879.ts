
const express = require('express')
import {handler2879} from "./handler2879";
const app = express()
app.get('/2879', handler2879)
app.listen(3000, () => {})
        