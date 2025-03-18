
const express = require('express')
import {handler6381} from "./handler6381";
const app = express()
app.get('/6381', handler6381)
app.listen(3000, () => {})
        