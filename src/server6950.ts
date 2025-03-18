
const express = require('express')
import {handler6950} from "./handler6950";
const app = express()
app.get('/6950', handler6950)
app.listen(3000, () => {})
        