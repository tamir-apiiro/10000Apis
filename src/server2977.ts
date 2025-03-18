
const express = require('express')
import {handler2977} from "./handler2977";
const app = express()
app.get('/2977', handler2977)
app.listen(3000, () => {})
        