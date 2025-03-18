
const express = require('express')
import {handler6431} from "./handler6431";
const app = express()
app.get('/6431', handler6431)
app.listen(3000, () => {})
        