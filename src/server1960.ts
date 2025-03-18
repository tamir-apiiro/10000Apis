
const express = require('express')
import {handler1960} from "./handler1960";
const app = express()
app.get('/1960', handler1960)
app.listen(3000, () => {})
        