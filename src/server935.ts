
const express = require('express')
import {handler935} from "./handler935";
const app = express()
app.get('/935', handler935)
app.listen(3000, () => {})
        