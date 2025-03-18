
const express = require('express')
import {handler6331} from "./handler6331";
const app = express()
app.get('/6331', handler6331)
app.listen(3000, () => {})
        