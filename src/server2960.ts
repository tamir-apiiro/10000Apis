
const express = require('express')
import {handler2960} from "./handler2960";
const app = express()
app.get('/2960', handler2960)
app.listen(3000, () => {})
        