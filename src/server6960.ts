
const express = require('express')
import {handler6960} from "./handler6960";
const app = express()
app.get('/6960', handler6960)
app.listen(3000, () => {})
        