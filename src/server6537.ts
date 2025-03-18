
const express = require('express')
import {handler6537} from "./handler6537";
const app = express()
app.get('/6537', handler6537)
app.listen(3000, () => {})
        