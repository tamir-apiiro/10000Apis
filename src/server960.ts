
const express = require('express')
import {handler960} from "./handler960";
const app = express()
app.get('/960', handler960)
app.listen(3000, () => {})
        